export const getMoviesList = async (listName: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieGenres = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMoviesByGenreId = async (genreIds: string[], page: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieDetail = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieCrew = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieGenre = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getSimilarMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieTrailer = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMBD_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getNOwPlayingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "applocation/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  console.log("DATA IRLEE", data);
  return data;
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
