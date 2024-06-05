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

// Function to get the current authenticated user
const getCurrentUser = () => {
  const user = getAuth().currentUser;
  if (!user) {
    throw new Error("User not logged in");
  }
  return user;
};

// Function to find a show by ID in the shows array
const findShowById = (shows, id) => {
  const show = shows.find((show) => show.id === id);
  if (!show) {
    throw new Error("Show not found");
  }
  return show;
};

// Function to update the bookmark status in Firestore
const updateBookmarkStatusInFirestore = async (userShowsRef, id, newBookmarkStatus, showTitle) => {
  const querySnapshot = await getDocs(query(userShowsRef, where("id", "==", id)));

  if (!querySnapshot.empty) {
    querySnapshot.forEach(async (docSnapShot) => {
      const docRef = doc(userShowsRef, docSnapShot.id);
      await setDoc(docRef, { isBookmarked: newBookmarkStatus }, { merge: true });
    });
  } else {
    const newDocRef = doc(userShowsRef, id);
    await setDoc(newDocRef, {
      id,
      title: showTitle,
      isBookmarked: newBookmarkStatus,
    });
  }
};

// Main function to toggle the bookmark status
const toggleBookmark = async (id, setShows, shows) => {
  try {
    const user = getCurrentUser();
    const userEmail = user.email;
    const userShowsRef = collection(db, "users", userEmail, "shows");

    const showToToggle = findShowById(shows, id);
    const newBookmarkStatus = !showToToggle.isBookmarked;

    // Update the local state
    const updatedShows = shows.map((show) =>
      show.id === id ? { ...show, isBookmarked: newBookmarkStatus } : show
    );
    setShows(updatedShows);

    await updateBookmarkStatusInFirestore(userShowsRef, id, newBookmarkStatus, showToToggle.title);
  } catch (error) {
    console.error(error.message);

    // Revert the local state in case of an error
    const revertedShows = shows.map((show) =>
      show.id === id ? { ...show, isBookmarked: !show.isBookmarked } : show
    );
    setShows(revertedShows);
  }
};

export { toggleBookmark };
