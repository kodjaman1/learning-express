import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var fname = req.body["fName"];
  var lname = req.body["lName"];
  var number = fname.length + lname.length;
  console.log(fname, fname.length, number);
  res.render("index.ejs", {
    numLetter: number
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
