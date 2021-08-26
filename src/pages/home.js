import { useState } from "react";
import useFetchPopular from "../hooks/useFetchPopular";
import MovieCard from "../components/MovieCard";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useFetchPopular(page);

  const handleChange = (e, value) => {
    setPage(value);
  };
  //TODO: Virtualized list
  return (
    <>
      {isFetching && <LinearProgress color="secondary" />}
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h4">Popular</Typography>
        </Box>

        <Grid container spacing={3}>
          {data?.results?.map((result) => (
            <Grid item xs={6} md={3} lg={2} key={result.id}>
              <MovieCard movie={result} />
            </Grid>
          ))}
        </Grid>
        <Box my={4} display="flex" justifyContent="center">
          <Pagination
            count={data?.total_pages}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
