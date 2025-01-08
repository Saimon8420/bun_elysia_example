import { User, IUser } from "../models/userModel";


export const createUser = async (data: IUser): Promise<IUser> => {
    const user = new User(data);
    await user.save()
    return user;
}

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ email });
}