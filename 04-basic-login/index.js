//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";

const app = express();
const port = 3000;
const password = "ILoveProgramming";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/check", (req,res)=>{

    var input = req.body["password"];
    if(input == password){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }

});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, (req,res)=>{
    console.log(`Listening on port ${port}`);
});

