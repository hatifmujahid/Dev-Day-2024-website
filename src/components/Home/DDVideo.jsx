import React from "react";
import Video1 from "../../assets/dd_video1.mp4";

const DDVideo = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          className="mx-auto rounded-3xl"
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DDVideo;
