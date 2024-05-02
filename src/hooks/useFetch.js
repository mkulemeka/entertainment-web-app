import { useEffect, useState } from "react";

const useFetch = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localShows = localStorage.getItem("shows");
        if (localShows) {
          setShows(JSON.parse(localShows));
          setLoading(false);
        }

        if (!localShows) {
          const data = await fetchShowsFromServer();
          setShows(data);
          setLoading(false);

          localStorage.setItem("shows", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch shows from server
  const fetchShowsFromServer = async () => {
    const url = "../../data.json";
    const response = await fetch(url);
    return response.json();
  };

  const toggleBookmark = (title) => {
    const updatedShows = shows.map((show) =>
      show.title === title ? { ...show, isBookmarked: !show.isBookmarked } : show
    );
    setShows(updatedShows);
    localStorage.setItem("shows", JSON.stringify(updatedShows));
  };

  return {
    shows,
    loading,
    toggleBookmark,
  };
};

export default useFetch;
