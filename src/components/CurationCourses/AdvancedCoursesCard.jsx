import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import ListCourseCard from "./ListCourseCard";

const AdvancedCoursesCard = ({ advancedcoursesarray }) => {
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
          <Card.Title style={{ fontWeight: "bold" }} >Advanced Level</Card.Title>
        </Card.Header>
        {!advancedcoursesarray.length ? (
          <h3>Nothing Nada</h3>
        ) : (
            <ListGroup className="list-group-flush">
              {advancedcoursesarray.map((user, i) => {
                return (
                  <ListCourseCard
                    key={i}
                    link={advancedcoursesarray[i].url}
                    text={advancedcoursesarray[i].title}
                  />
                );
              })}
            </ListGroup>
          )}
      </Card>
    </>
  );
};

export default AdvancedCoursesCard;
