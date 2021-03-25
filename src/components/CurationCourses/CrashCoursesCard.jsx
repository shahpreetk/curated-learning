import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import ListCourseCard from "./ListCourseCard";

const CrashCoursesCard = ({ crashcoursesarray }) => {
  return (
    <>
      <Card className="shadow-sm border-0">
        <Card.Header
          style={{
            fontFamily: "'Bitter', serif",
            color: "#4e5997",
            backgroundColor: "#defff7",
          }}
        >
          <Card.Title style={{ fontWeight: "bold" }} >Crash Courses</Card.Title>
        </Card.Header>
        {!crashcoursesarray.length ? (
          <h3>Nothing Nada</h3>
        ) : (
            <ListGroup className="list-group-flush">
              {crashcoursesarray.map((user, i) => {
                return (
                  <ListCourseCard
                    key={i}
                    link={crashcoursesarray[i].url}
                    text={crashcoursesarray[i].title}
                  />
                );
              })}
            </ListGroup>
          )}
      </Card>
    </>
  );
};

export default CrashCoursesCard;
