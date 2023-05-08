import { NavLink, Route, Switch } from "react-router-dom";
import MoviesDetails from "../MovieDetails";

function Movies(props) {
  const { movies } = props;
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          );
        })}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MoviesDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
