const express = require("express");
const router = require("./router/router.js");
const cors = require("cors");
const db = require("./config/db.js");
const cookieParser = require("cookie-parser");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(cookieParser());

async function startApp() {
  try {
    app.listen(PORT, () =>
      console.log("REST API server ready at: http://localhost:8080")
    );

    await db.authenticate();
    if (db.authenticate) {
      console.log("Соединение с БД было успешно установлено");
    }
  } catch (error) {
    if (!db.authenticate) {
      console.log("Соединение с БД не установлено");
    }
    console.log(error);
    //
  }
}

startApp();

// DATABASE_URL="postgresql://postgres:0000@localhost:5432/postgres"

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   socket.on("join", ({ name, room }) => {
//     socket.join(room);
//   });

//   io.on("disconnect", () => {
//     console.log("Disconnetc");
//   });
// });
