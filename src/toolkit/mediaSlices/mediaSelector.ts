import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const mediaSelector = (state: RootState) => state.media;

export const selectedMicSelector = createSelector(
  mediaSelector,
  (media) => media.micInfo.selectedMic
);

export const selectedCameraSelector = createSelector(
  mediaSelector,
  (media) => media.cameraInfo.selectedCamera
);
export const selectedSpeakerSelector = createSelector(
  mediaSelector,
  (media) => media.speakerInfo.selectedSpeaker
);
