import React from "react";
// bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ButtonStyle = styled.div`
  .custom-blog-btn {
    background-color: #29c785;
    box-sizing: border-box;
    color: #16343a;
    font-family: "Work Sans", sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.15s;
    outline: none;

    &:hover {
      background-color: #16343a;
      color: #29c785;
    }
  }
  a {
    outline: none;
  }
  .custom-blog-btn:not(:disabled):not(:disabled):active {
    background-color: #29c785;
    color: #16343a;
  }
`;

const BlogCard = ({ blogTitle, blogDescription, blogTags, blogArticleSrc }) => {
  return (
    <>
      <Card className="border-0 shadow-lg bg-white rounded my-5">
        <Row className="no-gutters">
          <Col className="col-md-12">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mt-1 mb-1">{blogTitle}</Card.Title>
              <Card.Text className="mt-1 mb-1">{blogDescription}</Card.Text>
              <Card.Text>
                <small className="text-muted">{blogTags}</small>
              </Card.Text>
              <ButtonStyle>
                <a target="_blank" rel="noreferrer" href={blogArticleSrc}>
                  <Button
                    style={{
                      boxShadow: "0px 6px 5px 6px #ccc",
                    }}
                    className="custom-blog-btn border-0 shadow-none"
                  >
                    Read More
                  </Button>
                </a>
              </ButtonStyle>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default BlogCard;
