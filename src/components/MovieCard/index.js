import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";

import { CardContentStyled, Rating } from "./styles";

const MovieCard = ({ movie: { title, poster_path, vote_average } }) => {
  return (
    //TODO: Cards do mesmo tamanho
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          //TODO: URL dinâmica
          image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          title={title}
        />
        <CardContentStyled>
          <Typography>{title}</Typography>
          <Rating>
            <StarIcon fontSize="small" />
            {vote_average}
          </Rating>
        </CardContentStyled>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
