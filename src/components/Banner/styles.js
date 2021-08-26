import styled from "styled-components";

const BannerStyled = styled("section")`
  background-image: linear-gradient(#000000bf, #000000bf),
    url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${({ url }) =>
      url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  color: white;
`;

export default BannerStyled;
