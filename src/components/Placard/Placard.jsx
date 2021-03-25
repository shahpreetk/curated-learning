import React from "react";
// bootstrap imports
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledCard = styled.div`
  .custom-placard {
    background-color: #e1f7ee;
    color: #16343a;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    max-width: 100%;
    padding: 20px;
    text-align: center;
    white-space: pre-wrap;
  }
`;

const Placard = ({ placardcontent }) => {
  return (
    <>
      <StyledCard>
        <Card className="border-0 shadow-sm bg-white rounded">
          <Card.Body className="custom-placard rounded">
            {placardcontent}
          </Card.Body>
        </Card>
      </StyledCard>
    </>
  );
};

export default Placard;
