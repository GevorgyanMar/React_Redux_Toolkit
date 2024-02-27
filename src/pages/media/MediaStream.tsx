import React, { FC, useEffect, useRef } from "react";
import {
  selectedCameraSelector,
  selectedMicSelector,
} from "../../toolkit/mediaSlices/mediaSelector";
import { useSelector } from "react-redux";
import { streamProvider } from "../../providers/streamProvider";

const MediaStream: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const mic = useSelector(selectedMicSelector);
  const camera = useSelector(selectedCameraSelector);

  useEffect(() => {
    if (mic && camera) {
      startStream();
    }
  }, [mic, camera]);

  const startStream = async () => {
    await streamProvider.startStream(mic, camera);

    if (videoRef.current) {
      videoRef.current.srcObject = await streamProvider.getStream();
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };
  return (
    <div>
      <video ref={videoRef} width={500} height={500}></video>
    </div>
  );
};

export default MediaStream;
