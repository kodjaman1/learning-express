import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3031;

app.use(bodyParser.urlencoded({ extended: true })); //without this line, req.body wouldn't exist.

app.post("/submit", (req,res)=>{

  console.log("submit olayı patlatıldı\n");
  const formbody = req.body;
  console.log(formbody); 


});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
