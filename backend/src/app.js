const express = require("express");
var cors = require("cors");
const app = express();
const router = require("./routes");

app.use(cors());

app.use(express.json());
app.use(router);

// notFound
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(8080, () => console.log("app run port 8080"));
