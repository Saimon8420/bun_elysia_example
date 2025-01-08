import { z } from "zod";
import { createUser, getUserByEmail } from "../services/userService";

const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

export const registerUser = async ({ body }: { body: any }) => {
    const parsed = userSchema.safeParse(body);
    if (!parsed.success) {
        return { status: 400, body: { error: parsed.error.errors } };
    }

    const { name, email, password } = body;

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { status: 400, body: { error: "Email already exists" } }

    }

    const user = await createUser({ name, email, password } as any);
    return { status: 201, body: user };
}