const API_KEY = '9050ca1af6fc39b2e920fd40aa019cf7';

export const trendyMoviesURL = (pageNum = 1) => 
 `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${pageNum}`;

const genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

export {genreids};

