import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "omerkcm";
const yourPassword = "123";
const yourAPIKey = "a1fdc87a-1c62-428f-9602-6dfe0dd5855a";
const yourBearerToken = "b2112d70-8cc3-4eb1-ac21-55feea8d261c";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const string = JSON.stringify(response.data);
    console.log(string);
    res.render("index.ejs", {
      content: string,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);  
  }

});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: 
        {username: yourUsername,
        password: yourPassword,
      },
    });
    const result = response.data;
    const string = JSON.stringify(result[Math.floor(Math.random() * result.length)]);
    res.render("index.ejs", {
      content: string,
    });
  
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }

});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`); 
    const result = response.data;
    const string = JSON.stringify(result);
    res.render("index.ejs", {
      content: string,
    });

  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    
    const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
  
    const result = response.data;
    const string = JSON.stringify(result);
    res.render("index.ejs", {
      content: string,
    });

  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
