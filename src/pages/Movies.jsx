import { Loading, Search } from "../components";
import {useFetch, useSearch} from "../hooks";

import PageLayout from "../layouts/PageLayout";
import { SearchResults } from "../containers";

const Movies = () => {
  const { movies, loading } = useFetch();
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

Movies.propTypes = {};

export default Movies;
