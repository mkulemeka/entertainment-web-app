import { Loading, Search } from "../components";

import { EntertainmentContext } from "../context/EntertainmentProvider";
import PageLayout from "../layouts/PageLayout";
import { SearchResults } from "../containers";
import { motion } from "framer-motion";
import { pageVariants } from "../animations/variants";
import { useContext } from "react";
import useSearch from "../hooks/useSearch";

const TvSeries = () => {
  const { tvSeries, loading } = useContext(EntertainmentContext);
  const { searchInput, handleSearch } = useSearch();

  if (loading) return <Loading />;

  return (
    <motion.main
      className="tvSeries"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageVariants}
    >
      <Search
        placeholder="Search for TV series"
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {searchInput ? (
        <SearchResults searchInput={searchInput} shows={tvSeries} />
      ) : (
        <PageLayout shows={tvSeries} sectionHeading="TV Series" />
      )}
    </motion.main>
  );
};

TvSeries.propTypes = {};

export default TvSeries;
