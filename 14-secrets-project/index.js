import express from "express";
import axios from "axios";

const app = express();
const PORT = 3031;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const string = response.data;

        res.render("index.ejs", {
            secret: string.secret,
            user: string.username,
        });

    } catch (error) {
        console.log(error.response.data);
        res.render("index.ejs", {
            secret: error.response.data,
            user: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is hosting on port number: ${PORT}`);
});

