import { useEffect, useState } from "react";

const useFetch = () => {
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [trending, setTrending] = useState([]);
  const [bookmarkedShows, setBookmarkedShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "/data.json";
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
    const {
      moviesCategory,
      tvSeriesCategory,
      trendingCategory,
      bookmarkedShows: bookmarked,
    } = shows;
    setMovies(moviesCategory);
    setTvSeries(tvSeriesCategory);
    setTrending(trendingCategory);
    setBookmarkedShows(bookmarked);
  };

  return { bookmarkedShows, movies, shows, tvSeries, trending, loading, setBookmarkedShows };
};

// Helper function to filter shows by category
const filterCategory = (shows) => {
  const moviesCategory = shows.filter(
    ({ category }) => category.toLowerCase() === "movie"
  );
  const tvSeriesCategory = shows.filter(({ category }) =>
    category.toLowerCase().includes("tv series")
  );

  const trendingCategory = shows.filter(
    ({ isTrending }) => isTrending === true
  );

  const bookmarkedShows = shows.filter(
    ({ isBookmarked }) => isBookmarked === true
  );

  return {
    moviesCategory,
    tvSeriesCategory,
    trendingCategory,
    bookmarkedShows,
  };
};

export default useFetch;
