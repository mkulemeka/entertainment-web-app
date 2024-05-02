import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";

const EntertainmentContext = createContext();

const EntertainmentProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);
  const { shows, loading, toggleBookmark } = useFetch();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Filter shows based on category, isTrending, and isBookmarked
  const movies = shows.filter(({ category }) => category === "Movie");
  const tvSeries = shows.filter(({ category }) => category.includes("TV Series"));
  const trendingShows = shows.filter(({ isTrending }) => isTrending);
  const bookmarkedShows = shows.filter(({ isBookmarked }) => isBookmarked);

  const contextValue = {
    windowWidth,
    shows,
    loading,
    bookmarkedShows,
    movies,
    tvSeries,
    trendingShows,
    toggleBookmark,
  };

  return (
    <EntertainmentContext.Provider value={contextValue}>
      {children}
    </EntertainmentContext.Provider>
  );
};

EntertainmentProvider.propTypes = {
  children: PropTypes.node,
};

export { EntertainmentProvider, EntertainmentContext };
