const mongoose = require('mongoose');
async function connectToDB() {
    
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("DB connected ✅")
        
    } catch (error) {
         console.error("❌ MongoDB connection error:", error);
    }
}
module.exports = connectToDB

