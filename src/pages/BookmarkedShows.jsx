import { Loading, Search } from "../components";

import { EntertainmentContext } from "../context/EntertainmentProvider";
import PageLayout from "../layouts/PageLayout";
import SearchResults from "../containers/SearchResults";
import { useContext } from "react";
import useSearch from "../hooks/useSearch";

const BookmarkedShows = () => {
  const { bookmarkedShows, loading } = useContext(EntertainmentContext);
  const { searchInput, handleSearch } = useSearch();

  const bookmarkedMovies = bookmarkedShows.filter(
    (show) => show.category === "Movie"
  );
  const bookmarkedTvSeries = bookmarkedShows.filter((show) =>
    show.category.includes("TV Series")
  );

  if (loading) return <Loading />;
  return (
    <main className="bookmarked">
      <Search
        placeholder="Search for bookmarked shows"
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {searchInput.length ? (
        <SearchResults searchInput={searchInput} shows={bookmarkedShows} />
      ) : (
        <>
          <PageLayout
            shows={bookmarkedMovies}
            sectionHeading="Bookmarked Movies"
          />
          <PageLayout
            shows={bookmarkedTvSeries}
            sectionHeading="Bookmarked TV Series"
          />
        </>
      )}
    </main>
  );
};

BookmarkedShows.propTypes = {};

export default BookmarkedShows;
