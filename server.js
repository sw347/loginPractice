import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
const app = express();
const port = 8642;

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, () => {
  console.log("Server Port: ", port);
});
