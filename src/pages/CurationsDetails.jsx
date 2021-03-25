import React, { useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import AdvancedCoursesCard from "../components/CurationCourses/AdvancedCoursesCard";
import BeginnerCoursesCard from "../components/CurationCourses/BeginnerCoursesCard";
import CrashCoursesCard from "../components/CurationCourses/CrashCoursesCard";
import ElectiveCoursesCard from "../components/CurationCourses/ElectiveCoursesCard";
import IntermediateCoursesCard from "../components/CurationCourses/IntermediateCoursesCard";
import Title from "../components/CurationCourses/Title";
// curations data file
import { curations_data } from "../curations_data";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CustomCurationCard = styled.div`
.custom-button {
    background-color: #16343a;
    box-sizing: border-box;
    color: #29C785;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    margin: 0 0.1em 0.1em 0;
    padding: 0.5em 2em;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.15s;
    outline: none;

    &:hover{
      background-color: #29C785;
      color: #16343a;
    }
  }
    .custom-button:not(:disabled):not(:disabled):active{
      background-color: #16343a;
      color: #29C785;
    }
}
`;

const CurationsDetails = () => {
  let history = useHistory();

  useEffect(() => {
    document.title = "Curations | curatedLearning";
  });

  return !curations_data.length ? (
    <h3>Nothing Nada</h3>
  ) : (
    <>
      {curations_data.map((user, i) => {
        let curation;
        if (
          curations_data[i]._id === window.location.href.split("/curations/")[1]
        ) {
          curation = curations_data[i];
          return (
            <>
              <Container style={{ overflow: "hidden" }}>
                <Row className="pt-4 pb-2 pl-3">
                  <Col className="wrapper m-2">
                    <CustomCurationCard>
                      <Button
                        className="border-0 btn btn-sm custom-button shadow-none"
                        onClick={() => history.push("/curations")}
                      >
                        <IoIosArrowBack size={30} />
                      </Button>
                    </CustomCurationCard>
                  </Col>
                </Row>
                <Row>
                  <Col className="wrapper m-2">
                    <Title title={curation._path_title} />
                  </Col>
                </Row>
                <Row className="pt-2 pb-2 d-flex h-100" key={curation._id}>
                  <Col
                    className="wrapper m-2 justify-content-center align-self-center"
                    xs={12}
                    md
                  >
                    <Row className="pt-2 pb-2 px-4" xs={1}>
                      <BeginnerCoursesCard
                        beginnercoursesarray={curation._beginner_level}
                      />
                    </Row>
                    <Row className="pt-2 pb-2 px-4" xs={1}>
                      <IntermediateCoursesCard
                        intermediatecoursesarray={curation._intermediate_level}
                      />
                    </Row>
                    <Row className="pt-2 pb-2 px-4" xs={1}>
                      <AdvancedCoursesCard
                        advancedcoursesarray={curation._advanced_level}
                      />
                    </Row>
                  </Col>
                  <Col
                    className="wrapper m-2 justify-content-center align-self-center"
                    xs={12}
                    md
                  >
                    <Row className="pt-2 pb-2 px-4" xs={1}>
                      <CrashCoursesCard
                        crashcoursesarray={curation._crash_courses}
                      />
                    </Row>
                    <Row className="pt-2 pb-2 px-4" xs={1}>
                      <ElectiveCoursesCard
                        electivecoursesarray={curation._elective_courses}
                      />
                    </Row>
                  </Col>
                </Row>
              </Container>
            </>
          );
        } else return null;
      })}
    </>
  );
};

export default CurationsDetails;
