import PageLayout from "../layouts/PageLayout";
import PropTypes from "prop-types";

const SearchResults = ({ shows, searchInput }) => {
  if (searchInput) {
    // Filter shows based on search input
    const searchResults = shows.filter((show) =>
      show.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <PageLayout
        shows={searchResults}
        sectionHeading={`Found ${searchResults.length} results for '${searchInput}'`}
      />
    );
  }
};

SearchResults.propTypes = {
  shows: PropTypes.array,
  searchInput: PropTypes.string,
};

export default SearchResults;
