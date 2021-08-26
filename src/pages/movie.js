import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

import useGetMovie from "../hooks/useGetMovie";
import Rating from "../components/Rating";
import Banner from "../components/Banner";

const Movie = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetMovie(id);

  const release = new Date(data?.release_date).getFullYear();

  return (
    <>
      {isFetching ? (
        <LinearProgress color="secondary" />
      ) : (
        <>
          <Banner url={data?.backdrop_path}>
            <Container>
              <Grid container>
                <Grid item md={3}>
                  <Box p={4}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${data?.poster_path}`}
                      alt={data?.title}
                    />
                  </Box>
                </Grid>

                <Grid item md={9}>
                  <Box mt={4} display="flex" alignItems="baseline">
                    <Typography variant="h4">
                      {data?.title} ({release})
                    </Typography>
                    <Box ml={2}>
                      <Rating>{data?.vote_average}</Rating>
                    </Box>
                  </Box>

                  <Typography variant="subtitle1">
                    {data?.genres.map((genre) => genre.name).join(", ")} &#8226;{" "}
                    {data?.runtime}m
                  </Typography>

                  <Typography variant="subtitle1">
                    Original Language: {data?.original_language}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Banner>
          <Container>
            <Box my={4}>
              <Typography variant="h6">Sinopse</Typography>
              <Typography>{data?.overview}</Typography>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default Movie;
