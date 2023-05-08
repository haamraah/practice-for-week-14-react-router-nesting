import { useParams } from "react-router-dom";

function MovieDetails(props) {
  let { movieId } = useParams();
  const { movies } = props;
  const [movie] = movies.filter((movie) => {
    return movie.id == movieId;
  });
  return (
    <div className="comp purple">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;
