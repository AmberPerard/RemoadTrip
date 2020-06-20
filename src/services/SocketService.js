import socketIOClient from "socket.io-client";

class SocketService {
  constructor({
    onCoords = () => {},
    // onName = () => {},
    // onConnect = () => {},
    // onDisconnect = () => {},
    // onList = () => {},
  }) {
    this.ENDPOINTCAR = "https://evening-caverns-60077.herokuapp.com/";
    this.carSocket = socketIOClient(this.ENDPOINTCAR);
    // console.log("SocketService constuctore");
    // this.socket = io.connect(`https://chatathon.herokuapp.com`);
    //this.socket = io.connect(`http://localhost:8080`);
    // this.socket = io.connect();
    this.carSocket.emit("getCoords", (data) => onCoords(data));
    // this.carSocket.on("disconnect", () => onDisconnect());
    // this.carSocket.on("reconnect_error", () => onDisconnect());
    // this.carSocket.on("reconnect_failed", () => onDisconnect());
    // this.carSocket.on("message", (message) => onMessage(message));
    // this.carSocket.on("name", (name) => onName(name));
    // this.carSocket.on("list", (names) => onList(names));
  }

  sendName(name) {
    this.carSocket.emit("name", name);
  }

  sendText(text) {
    this.carSocket.emit("text", text);
  }
}

export default SocketService;
