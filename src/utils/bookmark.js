import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";

// takes title of the show, the state setter function, and the shows state
const toggleBookmark = async (id, setShows, shows) => {
  const user = getAuth().currentUser;

  if (!user) {
    console.error("User not logged in");
    return;
  }

  const userEmail = user?.email;
  const userShowsRef = collection(db, "users", userEmail, "shows");

  const showToToggle = shows.find((show) => show.id === id);
  if (!showToToggle) {
    console.error("Show not found");
    return;
  }

  const newBookmarkStatus = !showToToggle.isBookmarked;

  // Update the local state and localStorage
  const updatedShows = shows.map((show) =>
    show.id === id ? { ...show, isBookmarked: !show.isBookmarked } : show
  );
  setShows(updatedShows);

  try {
    const querySnapshot = await getDocs(query(userShowsRef, where("id", "==", id)));

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnapShot) => {
        const docRef = doc(userShowsRef, docSnapShot.id);
        await setDoc(docRef, { isBookmarked: newBookmarkStatus }, { merge: true });
      });
    } else {
      // add new document
      const newDocRef = doc(userShowsRef, id);
      await setDoc(newDocRef, {
        id,
        title: showToToggle.title,
        isBookmarked: newBookmarkStatus,
      });
    }
  } catch (error) {
    console.error("Error updating document: ", error);

    const revertedShows = shows.map((show) =>
      show.id === id ? { ...show, isBookmarked: !newBookmarkStatus } : show
    );
    setShows(revertedShows);
  }
};

export { toggleBookmark };
