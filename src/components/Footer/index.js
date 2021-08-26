import Box from "@material-ui/core/Box";
import FooterStyled from "./styles";
import logo from "../../assets/logo.svg";

const Footer = () => (
  <FooterStyled>
    <Box textAlign="center" p={4}>
      <Box mb={2}>
        <img src={logo} alt="Logo" width="200px" />
      </Box>

      <span>
        This product uses the TMDB API but is not endorsed or certified by TMDB
      </span>
    </Box>
  </FooterStyled>
);

export default Footer;
