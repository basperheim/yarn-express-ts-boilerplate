import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app: express.Application = express();

// Define a route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Start the server
const PORT: number = parseInt(process.env.PORT || "8080");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
