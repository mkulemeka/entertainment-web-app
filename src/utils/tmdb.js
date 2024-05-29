const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_ACCESS_TOKEN}`,
  },
};

const baseURL = "https://api.themoviedb.org/3";

const getTrendingShows = async () => {
  const response = await fetch(`${baseURL}/trending/all/week`, options);
  const data = await response.json();
  return data.results;
};

const getTrendingMovies = async () => {
  const response = await fetch(`${baseURL}/trending/movie/week`, options);
  const data = await response.json();
  return data.results;
};

const getTrendingTVShows = async () => {
  const response = await fetch(`${baseURL}/trending/tv/week`, options);
  const data = await response.json();
  return data.results;
};

const getShowDetails = async (id, category = "movie") => {
  const response = await fetch(`${baseURL}/${category}/${id}`, options);
  const data = await response.json();
  return data;
};

const getShowBackdrop = async (id, backdropPath, category = "movie") => {
  const response = await fetch(
    `${baseURL}/${category}/${id}/images/${backdropPath}`,
    options
  );
  const data = await response.json();
  return data;
};

const getDiscoveredShows = async (category = "movie") => {
  const respose = await fetch(`${baseURL}/discover/${category}`, options);
  const data = await respose.json();
  return data.results;
};

export {
  getTrendingShows,
  getShowDetails,
  getShowBackdrop,
  getDiscoveredShows,
  getTrendingMovies,
  getTrendingTVShows,
};
