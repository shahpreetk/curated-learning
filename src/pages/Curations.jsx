import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CurationCard from "../components/CurationCourses/CurationCard";
import { curations_data } from "../curations_data";

const Curations = () => {
  useEffect(() => {
    document.title = "Curations | curatedLearning";
  });

  return !curations_data.length ? (
    <h3>Nothing Nada</h3>
  ) : (
    <>
      <Container
        style={{
          backgroundColor: "#f0fbf7",
        }}
        className="my-5 py-5"
      >
        {curations_data.map((user, i) => {
          return (
            <Row className="mb-2" key={curations_data[i]._id}>
              <Col className="m-2">
                <CurationCard
                  id={curations_data[i]._id}
                  title={curations_data[i]._path_title}
                  description={curations_data[i]._path_description}
                  date={curations_data[i]._path_last_updated_on}
                  logo={curations_data[i]._path_title_image}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};
export default Curations;
