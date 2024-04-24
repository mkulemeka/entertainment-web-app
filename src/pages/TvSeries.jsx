import { Loading, Search } from "../components";
import {useFetch, useSearch} from "../hooks";

import PageLayout from "../layouts/PageLayout";
import { SearchResults } from "../containers";

const TvSeries = () => {
  const { tvSeries, loading } = useFetch();
  const { searchInput, handleSearch } = useSearch();

  if (loading) return <Loading />;

  return (
    <main className="tvSeries">
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
    </main>
  );
};

TvSeries.propTypes = {};

export default TvSeries;
