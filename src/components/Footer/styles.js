import styled from "styled-components";
import { withTheme } from "@material-ui/core";

const FooterStyled = withTheme(styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  margin-top: auto;
`);

export default FooterStyled;
