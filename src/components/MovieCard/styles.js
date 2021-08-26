import styled from "styled-components";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

export const CardStyled = styled(Card)`
  height: 100%;
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 370px;
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
