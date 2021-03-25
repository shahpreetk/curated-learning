import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import ListCourseCard from "./ListCourseCard";

const ElectiveCoursesCard = ({ electivecoursesarray }) => {
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
          <Card.Title style={{ fontWeight: "bold" }} >Elective Courses</Card.Title>
        </Card.Header>
        {!electivecoursesarray.length ? (
          <h3>Nothing Nada</h3>
        ) : (
            <ListGroup className="list-group-flush">
              {electivecoursesarray.map((user, i) => {
                return (
                  <ListCourseCard
                    key={i}
                    link={electivecoursesarray[i].url}
                    text={electivecoursesarray[i].title}
                  />
                );
              })}
            </ListGroup>
          )}
      </Card>
    </>
  );
};

export default ElectiveCoursesCard;
