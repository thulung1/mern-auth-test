const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB error", err))
