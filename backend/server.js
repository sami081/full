const express = require("express");
require("./config/db");
require("dotenv").config({ path: "../.env" });

const port = 5000;

// connexion a db

const app = express();

//Middleware qui permet de traiter les donné de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//lancer le server
app.listen(port, () => console.log("le server a démarrer au port " + port));
