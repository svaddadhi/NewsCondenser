const express = require("express");
require("dotenv").config();
const cors = require("cors");
const newsRoutes = require("./routes/newsRoutes");
const { PORT } = require("./utils/constants");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", newsRoutes);

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
