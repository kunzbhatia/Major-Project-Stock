import React from "react";
import Video from "../../videos/video.mp4";
import "./Front.css";
//import { FrontBg, FrontContainer, VideoBg } from "./FrontpgElements";
const Frontpg = () => {
  return (
    <div className="FrontContainer">
      <div className="FrontBg">
        <video
          controls
          autoPlay
          loop
          muted
          className="VideoBg"
          src={Video}
          type="video/mp4"
        />
      </div>
    </div>
  );
};

export default Frontpg;
