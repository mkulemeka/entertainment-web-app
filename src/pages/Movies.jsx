import { Loading, Search } from "../components";

import { EntertainmentContext } from "../context/EntertainmentProvider";
import PageLayout from "../layouts/PageLayout";
import { SearchResults } from "../containers";
import { useContext } from "react";
import  useSearch from "../hooks/useSearch";

const Movies = () => {
  const { movies, loading } = useContext(EntertainmentContext);
  const { searchInput, handleSearch } = useSearch();

  if (loading) return <Loading />;

  return (
    <main className="movies">
      <Search
        placeholder="Search for movies"
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {searchInput ? (
        <SearchResults searchInput={searchInput} shows={movies} />
      ) : (
        <PageLayout shows={movies} sectionHeading="Movies" />
      )}
    </main>
  );
};

export default Movies;
