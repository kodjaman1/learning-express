import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var dayType = "";
var dayStatements = {
  "weekend": "the weekend. Time to have some fun!",
  "weekday": "a weekday. Time to work hard!"
};

function dayChecker(){
  let date = new Date();
  let daynum = date.getDay();
  if (daynum == 0 || daynum == 6){
    dayType = "weekend";
  }
  else {
    dayType = "weekday";
  }
}

app.get("/", (req, res) => {
  dayChecker();
  console.log(dayType);
  res.render("index.ejs", {
    dayStatement: dayStatements[dayType]
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});