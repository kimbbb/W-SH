import styled from "styled-components";
import Carousel from "../images/carousel.png";
import Banner from "../images/banner.png"
import Gide from "../images/gide.png"

export const carousel = styled.div`
  background-image:url(${Carousel});
  width:100%;
  height: 400px;
  position: absolute;
  top: 70px;
`


export const box = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 1350px;
  height: 1800px;
  top: 50%;
  `
  export const banner = styled.div`
    background-image: url(${Banner});
    width: 100%;
    height: 150px;
    margin-top:30px;
  `

export const gide = styled.div`
  background-image:url(${Gide});
  width:100%;
  height: 1398px;
  margin-top:80px;
`