import React from "react";
import { Link } from "react-router-dom";
// bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// components
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import ContentCard from "../components/ContentCard/ContentCard";
import ButtonCustom from "../components/ButtonCustom/ButtonCustom";
import Placard from "../components/Placard/Placard";

const textOne = `curatedLearning is a personally curated list of learning paths for individuals who want to get started but are overwhelmed by the huge amount of resources that are available.
`;

const textTwo = `Please note that this list is in development phase and new resources will be added constantly.
If you have any suggestions or requests, please mail them to - shahpreetk@outlook.com
`;

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Container>
        <Row className="pt-4 pb-2">
          <Col md className="wrapper m-2 ">
            <ContentCard cardcontent={textOne} />
          </Col>
          <Col md className="wrapper m-2 ">
            <ContentCard cardcontent={textTwo} />
          </Col>
        </Row>
        <Row className="pt-5 pb-3">
          <Col>
            <div className="h-100">
              <div className="row h-100 justify-content-center align-items-center">
                <Link to="/curations">
                  <ButtonCustom buttonContent="Check Curations" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <h2
          style={{
            fontFamily: "'Bitter', serif",
            paddingTop: "40px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          Popular Curated Topics
        </h2>
        <Row className="pt-3">
          <Col md className="wrapper m-2">
            <a href="/curations/2">
              <Placard placardcontent="HTML" />
            </a>
          </Col>
          <Col md className="wrapper m-2">
            <a href="/curations/2">
              <Placard placardcontent="CSS" />
            </a>
          </Col>
          <Col md className="wrapper m-2">
            <a href="/curations/1">
              <Placard placardcontent="Python" />
            </a>
          </Col>
        </Row>
        <Row className="pt-1">
          <Col md className="wrapper m-2">
            <a href="/">
              <Placard placardcontent="ReactJS" />
            </a>
          </Col>
          <Col md className="wrapper m-2">
            <a href="/">
              <Placard placardcontent="Javascript" />
            </a>
          </Col>
          <Col md className="wrapper m-2">
            <Placard placardcontent="And Many More..." />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
