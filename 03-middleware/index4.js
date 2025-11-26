import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit", (req,res)=>{

  console.log("submit olayı patlatıldı\n");
  const formbody = req.body;
  console.log(formbody); 
  res.send(`<h1>Your Band Name Isss:<h1><h2>${formbody["street"]}${formbody["pet"]}<h2>`);

});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
