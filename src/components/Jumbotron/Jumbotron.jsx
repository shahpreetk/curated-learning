import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
// local assets
import heroImage from "../../assets/heroImage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${heroImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .jumbo h1,
  p {
    color: #ffffff;
    font-family: "Bitter", serif;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
  }

  .overlay {
    background-color: #193d43;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container></Container>
    </Jumbo>
  </Styles>
);
