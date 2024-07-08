const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const authRouter = require("./routers/books");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", authRouter);

mongoose
  .connect("mongodb://localhost:27017/BookStore")
  .then((result) => {
    app.listen(port, () => {
      console.log("Database connected!");
    });
  })
  .catch((err) => {
    console.error(err);
  });
