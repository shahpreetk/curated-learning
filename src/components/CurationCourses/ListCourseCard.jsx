import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { GoLinkExternal } from "react-icons/go";
import styled from 'styled-components';

const CustomAnchor = styled.div`
  .custom-a {
    font-family: 'Work Sans', sans-serif;
    text-decoration: none;
    color: #247d8b;

    &:hover {
      color: #7A1401;
    }
  }
`;

const ListCourseCard = ({ link, text }) => {
  return (
    <>
      <CustomAnchor>
        <ListGroupItem className="border-0 shadow-sm">
          <a
            className="custom-a"
            href={link}
            target="_blank"
            rel="noreferrer">
            <GoLinkExternal color="#CC1414" /> {' '}
            {text}
          </a>
        </ListGroupItem>
      </CustomAnchor>
    </>
  );
};

export default ListCourseCard;
