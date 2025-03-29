import { model, Schema } from "mongoose";


export interface IUser {
    googleId: string;
    email: string;
    displayName: string;
    profilePicture: string;
}

const UserSchema:Schema = new Schema({
    googleId: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true,},
    profilePicture: { type: String, required: true,},
});
export default model<IUser>("User", UserSchema);