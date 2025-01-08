import { Elysia } from "elysia";
import { userRoutes } from "./routes/userRoutes";

export const app = new Elysia()
    .use(userRoutes)
    .onError(({ error }) => ({ status: 500, body: { error: error } }));