import styled from "styled-components";
import CardContent from "@material-ui/core/CardContent";

export const CardContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled("div")`
  display: flex;
  align-items: center;
  background-color: #f9a825;
  border-radius: 4px;
  padding: 0 3px;
  color: white;
`;
