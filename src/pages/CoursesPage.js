import React from "react";
import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import { SingleCourse } from ".";

const CoursesPage = () => {
  const testData = [{ bgcolor: "#C9753D", completed: 60 }];

  return (
    <CoursesPageWrapper>
      <div className="container">
        <div className="category-based-list">
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            My Progress
          </div>
          <div className="App">
            {testData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
          <SingleCourse />
        </div>
      </div>
    </CoursesPageWrapper>
  );
};

const CoursesPageWrapper = styled.div`
  .category-based-list {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;

export default CoursesPage;
