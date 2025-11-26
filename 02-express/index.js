import express from "express";

// GET POST PUT PATCH DELETE (Common Types of HTTP Requests)
// Get = Client requests data from a server
// Post = Client sends data to a server
// Put = Client updates data on a server (old one is deleted)
// Patch = Client updates partial data on a server
// Delete = Client deletes data from a server

const app = express()
const port = 3000


app.get('/', (req, res)=>{      // http://localhost:3000/   this code defines when someone visits the home page what will they get
    res.send('<h1>Selam Express!</h1><h2>Nasilsin? kanzi</h2>\
        <a href="/about">About Sayfasina Git</a>')   // html tags can be used
    console.log(req.rawHeaders)
});

app.get('/about', (req, res)=>{
    res.send('<h1>About Page</h1><p>Burasi about sayfasi</p>')
});

app.get("/contact", (req, res)=>{
    res.send("<h1 style='color:green'>kodjaman1@github<h1>")
})

app.put("/", (req, res)=>{
    res.send("Put request alindi");
    res.sendStatus(200);  // 200 means OK
});

app.post("/", (req, res)=>{
    res.send("Post request alindi");
    res.sendStatus(201);  // 201 means Created
});

app.patch("/", (req, res)=>{
    res.send("Patch request alindi");
    res.sendStatus(200);
});

app.delete("/", (req, res)=>{
    res.send("Delete request alindi");
    res.status(204).send();  // 204 means No Content
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`)
});
