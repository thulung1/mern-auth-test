const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("dotenv").config();
require("./db");

const userRouter = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.URL, credentials: true }));
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
