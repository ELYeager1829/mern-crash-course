import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Enables reading JSON from req.body

const __dirname = path.resolve();

// Register API route
app.use("/api/products", productRoutes);

// Serve frontend if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}

// Start server
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
