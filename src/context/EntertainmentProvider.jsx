import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";

const EntertainmentContext = createContext();

const EntertainmentProvider = ({ children }) => {
  const [windwWidth, setWindwWidth] = useState(window?.innerWidth);
  const {
    shows,
    loading,
    bookmarkedShows,
    movies,
    tvSeries,
    setBookmarkedShows,
  } = useFetch();

  useEffect(() => {
    const handleResize = () => {
      setWindwWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contextValue = {
    windwWidth,
    shows,
    loading,
    bookmarkedShows,
    movies,
    tvSeries,
    setBookmarkedShows,
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
