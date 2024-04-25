// Definition: Utility function to handle bookmarking of shows.
const handleBookmarkClick = (show, setBookmarkedShows) => {
  const { title } = show;

  setBookmarkedShows((prevBookmarked) => {
    const isShowBookmarked = prevBookmarked.find(
      (bookmarkedShow) => bookmarkedShow.title === title
    );

    if (isShowBookmarked) {
      return prevBookmarked.filter(
        (bookmarkedShow) => bookmarkedShow.title !== title
      );
    }

    return [...prevBookmarked, { ...show, isBookmarked: true }];
  });
};

export { handleBookmarkClick };
