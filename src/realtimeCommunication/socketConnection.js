import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (token) => {
  socket = io("http://localhost:8000", {
    auth: {
      token: token,
    },
  });

  socket.on("connect", () => {
    console.log("successfully connected with socket io");
    console.log(socket.id);
  });
};
