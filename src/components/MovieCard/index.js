import React from "react";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CardContentStyled from "./styles";
import Rating from "../Rating";

const MovieCard = ({
  movie: { id, title, poster_path, vote_average },
  history,
}) => {
  return (
    //TODO: Cards do mesmo tamanho
    <Card>
      <CardActionArea onClick={() => history.push(`/movie/${id}`)}>
        <CardMedia
          component="img"
          //TODO: URL dinâmica
          image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          title={title}
        />
        <CardContentStyled>
          <Typography>{title}</Typography>
          <Rating>{vote_average}</Rating>
        </CardContentStyled>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(MovieCard);
