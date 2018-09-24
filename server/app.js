const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRouter = require("./routes/userAuth");
const courseRouter = require("./routes/course");

mongoose.connect(
  "mongodb://localhost/blogger-react",
  { useNewUrlParser: true },
  () => console.log("connected to database.")
);

const app = express();

app.use(cors("*"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/", courseRouter);

app.set("port", process.env.PORT || 8001);

app.listen(app.get("port"), () => {
  console.log("Server started at : ", app.get("port"));
});
