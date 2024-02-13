export class Media {
  mediaStream: MediaStream | null;
  isPlaying: boolean;
  videoRef: HTMLVideoElement;

  constructor() {
    this.mediaStream = null;
    this.isPlaying = false;
    this.videoRef = document.createElement("video");

    this.videoRef.addEventListener("play", () => (this.isPlaying = true));
    this.videoRef.addEventListener("pause", () => (this.isPlaying = false));
    this.on();
  }

  async on() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.videoRef.srcObject = stream;
      this.mediaStream = stream;
      this.isPlaying = true;
      this.render(this.videoRef);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  }

  async off() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      this.mediaStream = null;
    }

    this.isPlaying = false;
    this.render(this.videoRef);
  }

  togglePlay() {
    if (this.videoRef.paused) {
      this.videoRef
        .play()
        .catch((error) => console.error("Error playing video:", error));
    } else {
      this.videoRef.pause();
    }
    this.render(this.videoRef);
  }

  handleChangeDevice = async () => {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.videoRef.srcObject = newStream;
      this.mediaStream = newStream;
      this.render(this.videoRef);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  render(videoRef: HTMLVideoElement) {
    if (this.mediaStream) {
      videoRef.srcObject = this.mediaStream;
    }
  }
}
