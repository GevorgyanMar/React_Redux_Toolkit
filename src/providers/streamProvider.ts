class StreamProvider {
  stream: MediaStream | null = null;
  chunks: BlobPart[] = [];
  private async createStream(mic: MediaDeviceInfo, camera: MediaDeviceInfo) {
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: camera.deviceId },
      audio: { deviceId: mic.deviceId },
    });
  }

  async onStream(mic: MediaDeviceInfo | null, camera: MediaDeviceInfo | null) {
    if (this.stream) {
      this.offStream();
    }
    if (!mic || !camera) {
      return;
    }
    await this.createStream(mic, camera);
  }

  offStream() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }
  addChunk(chunk: BlobPart) {
    this.chunks.push(chunk);
  }
}

export const streamProvider = new StreamProvider();
