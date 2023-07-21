import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const CourseList = () => {
  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>know our courses</h2>
        </div>

        <Tabs />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
