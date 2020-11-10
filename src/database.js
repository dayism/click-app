
const mongoose = require("mongoose");
const url =  "mongodb+srv://daya:1234@cluster0.ruuoj.mongodb.net/paginas-app?retryWrites=true&w=majority" ;

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log("Mongodb is connected to"))
.catch((err) => console.error(err))
