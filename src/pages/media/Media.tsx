import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  selectedCameraSelector,
  selectedMicSelector,
} from "../../toolkit/mediaSlices/mediaSelector";
import { streamProvider } from "../../providers/streamProvider";
import MediaList from "./MediaList";
import { devicesProvider } from "../../providers/devicesProvider";
import { dbConnection } from "../../providers/DatabaseProvider";

type us = {
  userId: string;
  streamId: string;
};
const MediaComponent: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const selectedMic = useSelector(selectedMicSelector);
  const selectedCamera = useSelector(selectedCameraSelector);

  useEffect(() => {
    devicesProvider.getDevices();
  }, []);

  useEffect(() => {
    dbConnection.openDB();
  }, []);

  useEffect(() => {
    if (selectedMic && selectedCamera) {
      startStream();
    }
  }, [selectedMic, selectedCamera]);

  const startStream = async () => {
    try {
      await streamProvider.onStream(selectedMic, selectedCamera);

      if (videoRef.current) {
        videoRef.current.srcObject = streamProvider.stream;
        videoRef.current.autoplay = true;
        videoRef.current.play();
      }
      const videoData: us = {
        userId: "someUserId",
        streamId: "someStreamId",
      };

      dbConnection.addItem(videoData);
    } catch (error) {
      console.error("Error starting stream:", error);
    }
  };

  return (
    <div>
      {<video ref={videoRef}></video>}

      <button onClick={() => startStream()}>Start</button>

      {/* <MediaList /> */}
    </div>
  );
};
export default MediaComponent;
