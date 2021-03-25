import React from "react";
// bootstrap imports
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledCard = styled.div`
  .left-preview {
    background-color: #245760;
    color: #fff;
    font-family: "Work Sans", sans-serif;
    letter-spacing: 1px;
    line-height: 2;
    max-width: 100%;
    padding: 20px;
    margin-top: 0;
    white-space: pre-wrap;
  }
`;

const ContentCard = ({ cardcontent }) => {
  return (
    <>
      <StyledCard>
        <Card className="border-0 shadow-lg bg-white rounded">
          <Card.Body className="left-preview rounded">
            <Card.Text>{cardcontent}</Card.Text>
          </Card.Body>
        </Card>
      </StyledCard>
    </>
  );
};

export default ContentCard;
