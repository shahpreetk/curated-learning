import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const CustomCurationCard = styled.div`
.custom-button {
    background-color: #29C785;
    box-sizing: border-box;
    color: #16343a;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    margin: 0 0.3em 0.3em 0;
    padding: 0.5em 3em;
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

const CurationCard = ({ id, title, link, logo, date, description }) => {
  return (
    <>
      <CustomCurationCard>
        <Card className="border-0 shadow-sm">
          <div className="card-wrapper">
            <Row>
              <Col className="col-12 col-md-2">
                <div
                  className="border-0 card mx-auto image-wrapper"
                  style={{ width: "12rem" }}
                >
                  <div
                    className="d-flex align-items-center mx-1"
                    style={{ height: "200px" }}
                  >
                    <Card.Img
                      className="card-img-top align-self-center"
                      src={logo}
                      alt={id}
                    />
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-6 align-self-center">
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "'Bitter', serif",
                      fontWeight: 500,
                    }}
                    className="mt-0 mb-3 ml-1 display-5"
                  >
                    {title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 400,
                    }}
                    className="mt-1 mb-3 ml-1 display-7"
                  >
                    {description}
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "12px",
                    }}
                    className="mt-5 mb-0 ml-1 text-muted"
                  >
                    Last Updated on : {date}
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col className="col-12 col-md-4 align-self-center">
                <Card.Body>
                  <div className="border-0 card mx-auto image-wrapper">
                    <div className="d-flex align-items-center mx-1">
                      <Button
                        type="button"
                        href={`/curations/${id}`}
                        className="border-0 btn btn-lg custom-button shadow-none"
                      >
                        <IoIosArrowForward size={30} />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </div>
        </Card>
      </CustomCurationCard>
    </>
  );
};

export default CurationCard;
