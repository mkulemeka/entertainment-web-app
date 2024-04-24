import { Loading, Search } from "../components";
import { SearchResults, Trending } from "../containers";
import { useFetch, useSearch } from "../hooks";

import PageLayout from "../layouts/PageLayout";

const Home = () => {
  const { shows, trending, loading } = useFetch();
  const { searchInput, handleSearch } = useSearch();

  if (loading) return <Loading />;

  return (
    <main className="home">
      <Search
        placeholder="Search for movies or TV series"
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {searchInput ? (
        <SearchResults searchInput={searchInput} shows={shows} />
      ) : (
        <>
          <Trending trendingShows={trending} />
          <PageLayout shows={shows} sectionHeading="Recommended for you" />
        </>
      )}
    </main>
  );
};

Home.propTypes = {};

export default Home;
