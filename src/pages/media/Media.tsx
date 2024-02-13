import React, { FC, useEffect, useRef, useState } from "react";
import { Media } from "../../provider/mediaProvider";

const CreateMedia: FC = () => {
  let mediaInstance = new Media();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    mediaInstance.on();
  }, []);

  const handleTogglePlay = () => {
    mediaInstance.togglePlay();
  };

  const handleChangeDevice = () => {
    mediaInstance.handleChangeDevice();
  };
  useEffect(() => {
    if (videoRef.current) {
      mediaInstance.render(videoRef.current);
    }
  }, [mediaInstance, videoRef.current]);

  return (
    <div>
      <video ref={videoRef} />
      <button onClick={handleTogglePlay}>
        {mediaInstance?.isPlaying ? "Stop" : "Play"}
      </button>
      <button onClick={handleChangeDevice}>Change Device</button>
    </div>
  );
};

export default CreateMedia;
