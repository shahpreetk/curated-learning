import React, { useEffect } from "react";
// bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// components
import BlogCard from "../components/BlogCard/BlogCard";
import { blogs_data } from "../blogs_data";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | curatedLearning";
  }, []);
  return (
    <>
      <Container>
        <h4
          style={{
            fontFamily: "'Bitter', serif",
            paddingTop: "20px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Personally Curated Blogs
        </h4>
        <Row className="pt-3">
          <Col xs={12}>
            {!blogs_data.length ? (
              <h3>Nothing Nada</h3>
            ) : (
              blogs_data.map((user, i) => {
                return (
                  <BlogCard
                    key={i}
                    blogTitle={blogs_data[i]._blog_title}
                    blogDescription={blogs_data[i]._blog_description}
                    blogArticleSrc={blogs_data[i]._blog_url}
                    blogTags={blogs_data[i]._blog_tags}
                  />
                );
              })
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blogs;
