import { Loading, Search } from "../components";
import { SearchResults, Trending } from "../containers";

import { EntertainmentContext } from "../context/EntertainmentProvider";
import PageLayout from "../layouts/PageLayout";
import { useContext } from "react";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const { shows, trendingShows, loading } = useContext(EntertainmentContext);
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
          <Trending trendingShows={trendingShows} />
          <PageLayout shows={shows} sectionHeading="Recommended for you" />
        </>
      )}
    </main>
  );
};

export default Home;
