import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import useGetMovie from "../hooks/useGetMovie";
import Rating from "../components/Rating";

const Movie = () => {
  const { id } = useParams();
  const { data } = useGetMovie(id);
  const release = new Date(data?.release_date).getFullYear();
  console.log(data);

  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
        alt={data?.title}
      />
      <div>
        <Typography variant="h4">
          {data?.title} ({release})
        </Typography>
        <Rating>{data?.vote_average}</Rating>
      </div>

      <Typography variant="subtitle1">
        {data?.genres.map((genre) => genre.name).join(", ")} &#8226;{" "}
        {data?.runtime}m
      </Typography>

      <Typography variant="h6">Sinopse</Typography>
      <Typography>{data?.overview}</Typography>
    </Container>
  );
};

export default Movie;
