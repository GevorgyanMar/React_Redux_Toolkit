import { io, Socket } from "socket.io-client";
import EventEmitter from "../Emitter/EventEmitter";
import { Message_Types, Messages_Event_Types } from "../constants/constants";
import { Message } from "../types/types";

class SignalingProvider {
  private socket: Socket | null = null;
  public eventEmitter: EventEmitter = new EventEmitter();

  public init() {
    this.socket = io("http://localhost:3008");

    this.socket.on(Message_Types.NEW_MESSAGE, (message: Message) =>
      this.onNewMessage(message)
    );
    this.socket.on(Message_Types.LOAD_MESSAGES, (messages: Message[]) =>
      this.onLoadMessages(messages)
    );
  }

  private onNewMessage = (message: Message) => {
    this.eventEmitter.emit(Messages_Event_Types.ADD_MESSAGE, message);
  };

  private onLoadMessages = (messages: Message[]) => {
    this.eventEmitter.emit(Messages_Event_Types.UPDATE_MESSAGES, messages);
  };

  public sendMessage(type: string, data: any) {
    if (!this.socket) {
      console.log("Socket is not initialized!");
      return;
    }
    this.socket.emit(type, data);
  }
}

export const signalingProvider = new SignalingProvider();
