import { registerUser } from "../controllers/userController";
import { Elysia } from "elysia";

export const userRoutes = new Elysia().post("/register", registerUser);