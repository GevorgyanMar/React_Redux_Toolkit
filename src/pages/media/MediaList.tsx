import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectedCameraSelector,
  selectedMicSelector,
} from "../../toolkit/mediaSlices/mediaSelector";
import { devicesProvider } from "../../providers/devicesProvider";

type ChunkType = {
  deviceId: string;
  label: string;
};

type Props = {
  isRecording: boolean;
};

const MediaList: FC<Props> = ({ isRecording }) => {
  const micList = useSelector(selectedMicSelector);
  const cameraList = useSelector(selectedCameraSelector);

  const onChangeMic = (micInfo: ChunkType) => {
    if (!isRecording) {
      devicesProvider.onChangeMic(micInfo);
    }
  };

  const onChangeCamera = (camInfo: ChunkType) => {
    if (!isRecording) {
      devicesProvider.onChangeCamera(camInfo);
    }
  };
  return (
    <>
      {micList ? (
        <div>
          <h1>SelectedMic</h1>
          <ul>
            {micList?.map((item: ChunkType, index: number) => (
              <li key={index} onClick={() => onChangeMic(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {cameraList ? (
        <div>
          <h1>SelectedCamera</h1>
          <ul>
            {cameraList?.map((item: ChunkType, index: number) => (
              <li key={index} onClick={() => onChangeCamera(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MediaList;
