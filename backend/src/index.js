const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const morgan = require("morgan");
const path = require("path");

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/contacts/uploads", express.static(path.resolve(__dirname, "uploads")));
app.use(morgan("dev")); 
app.use(routes);

app.listen(port, () => {
  console.log(`🚀 Server Started on port ${port}`);
});
