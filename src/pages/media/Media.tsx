import React, { FC, useEffect, useState } from "react";
import MediaStream from "./MediaStream";
import { recordingDBProvider } from "../../providers/recordingDBProvider";
import { devicesProvider } from "../../providers/devicesProvider";
import { Chunk } from "../../types/types";
import { recorderProvider } from "../../providers/recorderProvider";
import { streamProvider } from "../../providers/streamProvider";
import { dbConnection } from "../../providers/DatabaseProvider";
import MediaList from "./MediaList";

const MediaComponent: FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    dbConnection.openDB();
    devicesProvider.getDevices();
  }, []);

  const toggleRecording = async () => {
    const stream = await streamProvider.getStream();
    isRecording ? recorderProvider.stop() : recorderProvider.start(stream);
    setIsRecording((isRecording) => !isRecording);
  };

  const onDownload = async () => {
    const chunks = (await recordingDBProvider.getItems()) as Chunk[];
    if (!chunks.length) {
      return;
    }
    const blob = new Blob(
      chunks.map((chunk) => chunk.data),
      { type: "video/webm" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
  };

  return (
    <div>
      <button onClick={toggleRecording}>
        {isRecording ? "Stop" : "Start"} recording
      </button>
      {isRecording ? (
        <button onClick={onDownload}>Download recording</button>
      ) : null}

      <MediaStream />

      <MediaList isRecording={isRecording} />
    </div>
  );
};
export default MediaComponent;
