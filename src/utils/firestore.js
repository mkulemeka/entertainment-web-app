import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

const fetchFromFirebase = async (user) => {
  try {
    const querySnapShot = await getDocs(collection(db, "shows"));
    const bookmarkedShows = await fetchUserShows(user);

    const firebaseShows = querySnapShot.docs.map((doc) => {
      const bookmarked = bookmarkedShows?.find((show) => show.id === doc.id);
      if (bookmarked) {
        return { id: doc.id, ...doc.data(), isBookmarked: bookmarked.isBookmarked };
      }
      return { id: doc.id, ...doc.data() };
    });
    return firebaseShows;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

const fetchUserShows = async (user) => {
  if (!user) return;

  const userEmail = user?.email;
  const userShowsRef = collection(db, "users", userEmail, "shows");

  try {
    const querySnapShot = await getDocs(userShowsRef);
    const userShows = querySnapShot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return userShows;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export { fetchFromFirebase };
