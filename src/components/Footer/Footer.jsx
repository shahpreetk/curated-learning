import React from "react";
// bootstrap imports
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// styled components
import styled from "styled-components";

const Styles = styled.div`
  .main-footer {
    background-color: #69d8aa;
    color: #204e56;
    font-family: "Bitter", serif;
    letter-spacing: 1px;
  }
  .footer-copyright-text {
    background-color: #5fc299;
    color: #193d43;
    font-family: "Work Sans", sans-serif;
  }
  a {
    color: #204e56;
    text-decoration: none;
    &:hover {
      color: #204e56;
      text-decoration: none;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Styles>
        <footer className="page-footer font-small pt-4 pt-5">
          <div className="container-fluid text-center text-center main-footer">
            <Container>
              <div className="row">
                <div className="col">
                  <div className="m-2 mb-md-0 mb-3">
                    <h5 className="font-weight-bold pt-2 text-center">
                      An initiative by Preet Shah
                    </h5>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="footer-copyright-text text-center py-2 sticky-footer-wrapper">
            Developed with ❤️️ by{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shahpreetk"
            >
              <Button variant="outline-light" className="shadow-none">
                shahpreetk
              </Button>
            </a>
          </div>
        </footer>
      </Styles>
    </>
  );
};

export default Footer;
