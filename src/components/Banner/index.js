import React from "react";
import BannerStyled from "./styles";

const Banner = ({ url, children }) => (
  <BannerStyled url={url}>{children}</BannerStyled>
);

export default Banner;
