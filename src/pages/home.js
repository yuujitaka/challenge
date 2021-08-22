import { useState } from "react";
import useFetchPopular from "../hooks/useFetchPopular";
import MovieCard from "../components/MovieCard";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetchPopular(page);

  const handleChange = (e, value) => {
    setPage(value);
  };
  //TODO: Virtualized list e loading
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} xs>
        {data?.results?.map((result) => (
          <Grid item xs={6} md={3} lg={2}>
            <MovieCard key={result.id} movie={result} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={data?.total_pages}
        page={page}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Home;
