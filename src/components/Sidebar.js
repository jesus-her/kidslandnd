import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";

const Sidebar = () => {
  const menuItems = ["Help", "Settings", "Log out"];
  const { closeSidebar, isSidebarOpen } = useSidebarContext();

  return (
    <SidebarWrapper
      className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}
    >
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={() => closeSidebar()}
      >
        <MdClose />
      </button>
      <div className="user-container">
        <div className="user-avatar">BR</div>
        Britney Palma
      </div>
      <hr />
      <div className="sidebar-content">
        <ul className="sidebar-category">
          <Link to={"/my-courses"}>
            <li className="sidebar-link-item fw-5">My Courses</li>
          </Link>
          <Link to="/">
            <li className="sidebar-link-item fw-5">All Courses</li>
          </Link>
          {menuItems.map((category, idx) => {
            return (
              <li className="sidebar-link-item fw-5" key={idx}>
                {category}
              </li>
            );
          })}
          <li className="sidebar-link-item fw-5 delete-account">
            DELETE ACCOUNT
          </li>
        </ul>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);
  background: rgba(240, 236, 231, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);

  border: 1px solid rgba(255, 255, 255, 0.18);

  &.show-sidebar {
    transform: translateX(0);
  }

  .user-container {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    margin-bottom: 14px;
  }
  .user-avatar {
    background-color: var(--clr-black);
    width: 50px;
    height: 50px;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100px;
    font-size: 18px;
  }

  .sidebar-close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .sidebar-close-btn:hover {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
  .sidebar-content {
    margin-top: 20px;

    display: flex;

    h6 {
      margin-bottom: 16px;
    }
    .sidebar-link-item {
      font-size: 16px;
      margin-bottom: 20px;
      transition: var(--transition);
      font-weight: 500;
      padding: 3px 12px;
      border-radius: 100px;
      cursor: pointer;

      &:hover {
        background-color: #41b7ae;
        color: #fff;
      }
    }
    .delete-account {
      color: #f00;

      position: absolute;
      bottom: 0;
      &:hover {
        background-color: #f00;
        color: #fff;
      }
    }
  }
`;

export default Sidebar;
