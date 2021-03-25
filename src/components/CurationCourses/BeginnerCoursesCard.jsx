import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import ListCourseCard from "./ListCourseCard";

const BeginnerCoursesCard = ({ beginnercoursesarray }) => {
  return (
    <>
      <Card className="shadow-sm border-0 ml-0 pl-0">
        <Card.Header
          style={{
            fontFamily: "'Bitter', serif",
            color: "#defff7",
            backgroundColor: "#4e5997",
          }}>
          <Card.Title style={{ fontWeight: "bold" }} >Beginner Level</Card.Title>
        </Card.Header>
        {!beginnercoursesarray.length ? (
          <h3>Nothing Nada</h3>
        ) : (
            <ListGroup
              className="list-group-flush">
              {beginnercoursesarray.map((user, i) => {
                return (
                  <ListCourseCard
                    key={i}
                    link={beginnercoursesarray[i].url}
                    text={beginnercoursesarray[i].title}
                  />
                );
              })}
            </ListGroup>
          )}
      </Card>
    </>
  );
};

export default BeginnerCoursesCard;
