import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import ListCourseCard from "./ListCourseCard";

const IntermediateCoursesCard = ({ intermediatecoursesarray }) => {
  return (
    <>
      <Card className="shadow-sm border-0">
        <Card.Header
          style={{
            fontFamily: "'Bitter', serif",
            color: "#defff7",
            backgroundColor: "#4e5997",
          }}
        >
          <Card.Title style={{ fontWeight: "bold" }} >Intermediate Level</Card.Title>
        </Card.Header>
        {!intermediatecoursesarray.length ? (
          <h3>Nothing Nada</h3>
        ) : (
            <ListGroup className="list-group-flush">
              {intermediatecoursesarray.map((user, i) => {
                return (
                  <ListCourseCard
                    key={i}
                    link={intermediatecoursesarray[i].url}
                    text={intermediatecoursesarray[i].title}
                  />
                );
              })}
            </ListGroup>
          )}
      </Card>
    </>
  );
};

export default IntermediateCoursesCard;
