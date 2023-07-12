//ptQvw*8PdgWQsZH

const mongoose =require("mongoose");

const DB_HOST="mongodb+srv://Ihor:ptQvw*8PdgWQsZH@cluster0.qbxqqlz.mongodb.net/contacts_friends?retryWrites=true&w=majority"

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
.then(()=>console.log("Database connect success"))
.catch(error=>console.log(error.message));