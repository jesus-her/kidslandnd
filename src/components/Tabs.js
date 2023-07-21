import React from "react";
import styled from "styled-components";
import Course from "./Course";

import { course_images } from "../utils/images";

const Tabs = () => {
  const cursos = [
    {
      id: 1,
      image: course_images.geo,
      course_name: "Lorem ipsum dolor",
      description:
        "Learn HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP & MySQL from scratch!",
      rating_count: 6200,
      rating_star: 4.3,
      students: 90360,
      creator: "Jhon Smith",
      actual_price: 72.99,
      discounted_price: 14.99,
      category: "Geography",
    },
    {
      id: 2,
      image: course_images.math,
      course_name: "Lorem ipsum dolor",

      description:
        "Learn HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP & MySQL from scratch!",
      rating_count: 6200,
      rating_star: 4.3,
      students: 90360,
      creator: "Kalob Taulien",
      actual_price: 72.99,
      discounted_price: 14.99,
      category: "Mathematic",
    },
    {
      id: 3,
      image: course_images.art2,
      course_name: "Lorem ipsum dolor",

      description:
        "Learn HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP & MySQL from scratch!",
      rating_count: 6200,
      rating_star: 4.3,
      students: 90360,
      creator: "Kalob Taulien",
      actual_price: 72.99,
      discounted_price: 14.99,
      category: "Art",
    },
  ];

  return (
    <TabsWrapper>
      <div className="tabs">
        <ul className="flex flex-wrap">
          <li className="tabs-head-item">
            <button type="button" className={`tab-btn `}>
              Geography
            </button>
          </li>
          <li className="tabs-head-item">
            <button type="button" className={`tab-btn `}>
              Mathematic
            </button>
          </li>
          <li className="tabs-head-item">
            <button type="button" className={`tab-btn`}>
              Art
            </button>
          </li>
          <li className="tabs-head-item">
            <button type="button" className={`tab-btn `}>
              Chemistry
            </button>
          </li>
          <li className="tabs-head-item">
            <button type="button" className={`tab-btn`}>
              Design
            </button>
          </li>
          <li className="tabs-head-item">
            <button type="button" className={`tab-btn`}>
              Calligraphy
            </button>
          </li>
        </ul>

        <div className="tabs-body">
          {cursos.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;
    .tabs-head-item button {
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;
      border-radius: 100px;
      background-color: #f0f0f0;

      &:hover {
        background-color: #db4f4f;
        color: #fff;
      }
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs;
