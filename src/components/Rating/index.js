import StarIcon from "@material-ui/icons/Star";
import RatingStyled from "./styles";

const Rating = ({ children }) => (
  <RatingStyled>
    <StarIcon fontSize="small" />
    {children}
  </RatingStyled>
);

export default Rating;
