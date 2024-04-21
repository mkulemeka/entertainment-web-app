import { useEffect, useState } from "react";

const useFetch = () => {
  const [shows, setShows] = useState(null);
  const [movies, setMovies] = useState(null);
  const [tvSeries, setTvSeries] = useState(null);
  const [isTrending, setIsTrending] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "../data.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const shows = await response.json();
        setShows(shows);

        // Filter shows by category
        setCategory(filterCategory(shows));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Set shows by category
  const setCategory = (shows) => {
    const { moviesCategory, tvSeriesCategory, isTrendingCategory } = shows;
    setMovies(moviesCategory);
    setTvSeries(tvSeriesCategory);
    setIsTrending(isTrendingCategory);
  };

  return { movies, shows, tvSeries, isTrending, loading };
};

// Helper function to filter shows by category
const filterCategory = (shows) => {
  const moviesCategory = shows.filter(
    ({ category }) => category.toLowerCase() === "movie"
  );
  const tvSeriesCategory = shows.filter(({ category }) =>
    category.toLowerCase().includes("tv series")
  );

  const isTrendingCategory = shows.filter(
    ({ isTrending }) => isTrending === true
  );

  return { moviesCategory, tvSeriesCategory, isTrendingCategory };
};

export default useFetch;
