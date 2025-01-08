import { app } from "./app";
import { connectDB } from "./utils/db";

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
};

startServer();