import React from "react";
import "./topbar.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import profile from "../../assets/pic.jpg";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWraper">
        <div className="topLeft">
          <span className="logo"> Admin Dashboard</span>
        </div>
        <div className="topRigt">
          {" "}
          <div className="topbarIconContainer">
            {" "}
            <IoNotificationsOutline style={{ "font-size": "20px" }} />{" "}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {" "}
            <MdLanguage style={{ "font-size": "20px" }} />{" "}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {" "}
            <FiSettings style={{ "font-size": "20px" }} />{" "}
          </div>
          <img src={profile} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
