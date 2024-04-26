import { useEffect, useState } from "react";

const useFetch = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "/data.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const shows = await response.json();

        setShows(shows);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleBookmark = (title) => {
    console.log(title);
    const updatedShows = shows.map((show) =>
      show.title === title
        ? { ...show, isBookmarked: !show.isBookmarked }
        : show
    );
    setShows(updatedShows);
  };

  return {
    shows,
    loading,
    toggleBookmark,
  };
};

export default useFetch;
