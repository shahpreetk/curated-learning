import React from "react";
// bootstrap imports
import Button from "react-bootstrap/Button";
// styled components
import styled from "styled-components";

const ButtonStyle = styled.div`
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

const ButtonCustom = ({ buttonContent }) => {
  return (
    <>
      <ButtonStyle>
        <Button className="btn-lg custom-button shadow-lg border-0 rounded">
          {buttonContent}
        </Button>
      </ButtonStyle>
    </>
  );
};

export default ButtonCustom;
