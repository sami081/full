 dans le dossier backend creer un dossier config et a l'interieur un fichier db.js
dans le fichier db.js mettre : 
const mongoose = require("mongoose");



mongoose
  .connect(
    "mongodb+srv://username:password@cluster0.zs1ytra.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    }
  )
  .then(() => console.log("connect"))
  .catch((err) => console.log("no connect" ,err));