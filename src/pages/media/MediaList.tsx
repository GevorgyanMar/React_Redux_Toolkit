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
  const selectedMic = useSelector(selectedMicSelector);
  const selectedCamera = useSelector(selectedCameraSelector);

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
      {selectedMic ? (
        <div>
          <h1>SelectedMic</h1>
          <ul>
            {selectedMic?.map((item: ChunkType, index: number) => (
              <li key={index} onClick={() => onChangeMic(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {selectedCamera ? (
        <div>
          <h1>SelectedCamera</h1>
          <ul>
            {selectedCamera?.map((item: ChunkType, index: number) => (
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
