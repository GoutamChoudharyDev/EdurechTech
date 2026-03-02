import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

// Connect to MongoDB
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});