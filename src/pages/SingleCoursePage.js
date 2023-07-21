import React from "react";

import styled from "styled-components";

import StarRating from "../components/StarRating";

import { FaShoppingCart } from "react-icons/fa";
import { course_images } from "../utils/images";

const SingleCoursePage = () => {
  return (
    <SingleCourseWrapper>
      <div className="course-img" style={{ flex: 0.4, alignSelf: "center" }}>
        <img src={course_images.art2} alt={"art"} objectFit="contain" />
      </div>
      <div className="course-details" style={{ flex: 0.6 }}>
        <div
          style={{
            backgroundColor: "#db4f4f",
            width: "fit-content",
            paddingTop: 1,
            paddingLeft: 12,
            paddingBottom: 1,
            paddingRight: 12,
            borderRadius: 100,
            fontWeight: "bold",
          }}
        >
          Art
        </div>
        <div className="course-head">
          <h5>Nombre curso</h5>
        </div>
        <div className="course-body">
          <p className="course-para ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            voluptate velit esse cillum{" "}
          </p>
          <div className="course-rating flex">
            <span className="rating-star-val fw-8 fs-16">5</span>
            <StarRating rating_star={5} />
            <span className="rating-count fw-5 fs-14">(4.9)</span>
          </div>

          <ul className="course-info">
            <li>
              <span className="fs-14">
                Created by <span className="fw-6 opacity-08">Jesus H.</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="course-foot">
          <div className="course-price">
            <span className="new-price fs-26 fw-8">$12 </span>
            <span
              className="old-price fs-26 fw-6"
              style={{
                textDecoration: "line-through",
                color: "#eceb98",
                marginLeft: 10,
              }}
            >
              $15
            </span>
          </div>
        </div>

        <div className="course-btn">
          <FaShoppingCart /> Add to cart
        </div>
      </div>
    </SingleCourseWrapper>
  );
};

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 8px;
  gap: 16px;
  .course-img{
    width: 150px;
    border-radius: 10px;
    overflow: hidden;
    max-height: 200px;
  }

  .course-intro {
    padding: 40px 16px;
    max-width: 992px;

    .course-details {
      padding-top: 20px;
      
      .course-category {
        padding: 0px 8px;
        border-radius: 100px;
        padding: 10px 3px;

      }
    }


    .course-head {
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }
    .course-para {
      padding: 12px 0;
    }
    .rating-star-val {
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }
    .students-count {
      margin-left: 8px;
    }
    .rating-count {
      margin-left: 6px;
      color: #d097f6;
    }
    .course-info {
      li {
        margin-bottom: 2px;
        &:nth-child(2) {
          margin-top: 10px;
        }
      }
      .course-info-txt {
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }
    .course-price {
      margin-top: 12px;
      .old-price {
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
    .course-btn {
      margin-top: 16px;
      .add-to-cart-btn {
        padding: 12px 28px;
        span {
          margin-left: 12px;
        }
      }
    }

  

  .course-full {
    padding: 40px 16px;
    .course-sc-title {
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }
    .course-learn {
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list {
        li {
          margin: 5px 0;
          display: flex;
          span {
            &:nth-child(1) {
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

 
      }
    }

    .course-content {
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list {
        li {
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }
`;

export default SingleCoursePage;
