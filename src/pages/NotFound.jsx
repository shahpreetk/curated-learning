import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import jungleImage from "../assets/jungleImage.jpg";
import Card from "react-bootstrap/Card";

import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonOverride = styled.div`
  .customDiv {
    background-color: #29C785;
    box-sizing: border-box;
    color: #16343a;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.15s;
    outline: none;

    &:hover{
      background-color: #16343a;
      color: #29C785;
    }
  }
    .custom-button:not(:disabled):not(:disabled):active{
      background-color: #29C785;
      color: #16343a;
    }
  }
`;

const NotFound = () => {
  return (
    <>
      <div
        style={{
          background: `url(${jungleImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="align-items-center h-100 m-5">
            <Col className="mx-auto my-5 text-center justify-content-center align-self-center">
              <Card
                className="mx-auto my-5 text-center justify-content-center align-self-center"
                style={{
                  height: "400px",
                  width: "auto",
                  backgroundColor: `rgba(255, 255, 255, .15)`,
                  backdropFilter: `blur(5px)`,
                }}
              >
                <h2
                  className="my-5"
                  style={{
                    fontFamily: "'Bitter', serif",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    alignItems: "center",
                    color: "#ffffff",
                  }}
                >
                  Oops!
                  <br />
                  Error 404
                  <span style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <br /> Page Not Found!
                  </span>
                </h2>
                <ButtonOverride>
                  <Link to="/">
                    <Button className="customDiv border-0">Go Back Home</Button>
                  </Link>
                </ButtonOverride>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
