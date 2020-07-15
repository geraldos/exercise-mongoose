const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");
app.use("/api/users", require("./routes/users"));

const { PORT } = require("./config");
const { db } = require("./config");

app.get("/", (req, res) => {
  res.render("pages/home.ejs");
});

if (db) {
  console.log(`Connected to database `);
  app.listen(PORT, () => {
    console.log(`Server runs on your port ${PORT}`);
  });
}
