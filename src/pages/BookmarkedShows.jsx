import { Loading, Search } from "../components";

import { EntertainmentContext } from "../context/EntertainmentProvider";
import PageLayout from "../layouts/PageLayout";
import SearchResults from "../containers/SearchResults";
import { motion } from "framer-motion";
import { pageVariants } from "../animations/variants";
import { useContext } from "react";
import useSearch from "../hooks/useSearch";

const BookmarkedShows = () => {
  const { bookmarkedShows, loading } = useContext(EntertainmentContext);
  const { searchInput, handleSearch } = useSearch();

  if (loading) return <Loading />;

  const filteredShows = (category) =>
    bookmarkedShows.filter((show) => show.category === category);

  const bookmarkedMovies = filteredShows("Movie");
  const bookmarkedTvSeries = filteredShows("TV Series");

  const hasSearchInput = searchInput.length > 0;
  const hasBookmarkedMovies = bookmarkedMovies.length > 0;
  const hasBookmarkedTvSeries = bookmarkedTvSeries.length > 0;

  return (
    <motion.main
      className="bookmarked"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageVariants}
    >
      <Search
        placeholder="Search for bookmarked shows"
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {hasSearchInput ? (
        <SearchResults searchInput={searchInput} shows={bookmarkedShows} />
      ) : (
        <>
          {hasBookmarkedMovies && (
            <PageLayout
              shows={bookmarkedMovies}
              sectionHeading="Bookmarked Movies"
            />
          )}
          {hasBookmarkedTvSeries && (
            <PageLayout
              shows={bookmarkedTvSeries}
              sectionHeading="Bookmarked TV Series"
            />
          )}
        </>
      )}
    </motion.main>
  );
};

BookmarkedShows.propTypes = {};

export default BookmarkedShows;
