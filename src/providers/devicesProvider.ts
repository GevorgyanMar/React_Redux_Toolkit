import {
  setCameras,
  setMics,
  setSelectedCamera,
  setSelectedMic,
  setSelectedSpeaker,
  setSpeakers,
} from "../toolkit/mediaSlices/mediaReducer";
import { store } from "../toolkit/store";
interface MediaDeviceInfo {
  deviceId: string;
  label: string;
}

class DevicesProvider {
  private isRequested: boolean = false;

  constructor() {
    navigator.mediaDevices.ondevicechange = () => {};
  }

  async requestDevices() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing user media:", error);
    }
  }

  async getDevices() {
    if (!this.isRequested) {
      await this.requestDevices();
      this.isRequested = true;
    }

    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const audioInputs = devices
        .filter((device) => device.kind === "audioinput")
        .map(({ deviceId, label }) => ({ deviceId, label }));
      const videoInputs = devices
        .filter((device) => device.kind === "videoinput")
        .map(({ deviceId, label }) => ({ deviceId, label }));
      const audioOutputs = devices
        .filter((device) => device.kind === "audiooutput")
        .map(({ deviceId, label }) => ({ deviceId, label }));

      store.dispatch(setMics(audioInputs));
      store.dispatch(setCameras(videoInputs));
      store.dispatch(setSpeakers(audioOutputs));

      const selectedCamera = videoInputs.length > 0 ? videoInputs : null;
      const selectedMic = audioInputs.length > 0 ? audioInputs : null;
      const selectedSpeaker = audioOutputs.length > 0 ? audioOutputs : null;

      if (selectedCamera) {
        store.dispatch(setSelectedCamera(selectedCamera));
      }
      if (selectedMic) {
        store.dispatch(setSelectedMic(selectedMic));
      }
      if (selectedSpeaker) {
        store.dispatch(setSelectedSpeaker(selectedSpeaker));
      }
    });
  }

  async onChangeMic(selectedMic: MediaDeviceInfo) {
    store.dispatch(setMics(selectedMic));
    this.getDevices();
  }

  async onChangeCamera(selectedCamera: MediaDeviceInfo) {
    store.dispatch(setCameras(selectedCamera));
    this.getDevices();
  }
}

export const devicesProvider = new DevicesProvider();
