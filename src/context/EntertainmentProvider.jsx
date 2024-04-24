import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

const EntertainmentContext = createContext();

const EntertainmentProvider = ({ children }) => {
  const [windwWidth, setWindwWidth] = useState(window?.innerWidth);

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
