import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import { toggleBookmark as bookmarkToggle } from "../utils/bookmark";
import { fetchFromFirebase } from "../utils/firestore";

const useFetch = () => {
  const { user } = useContext(AuthContext);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromFirebase(user);
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  // Toggle bookmark
  const toggleBookmark = (showID) => {
    bookmarkToggle(showID, setShows, shows);
  };

  return {
    shows,
    loading,
    toggleBookmark,
  };
};

export default useFetch;
