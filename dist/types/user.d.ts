type AuthProvider = "local" | "google";
type UserRole = "admin" | "super_admin" | "subscriber" | "service_provider";
interface IBaseUserSchema {
    email: string;
    role: UserRole;
    authProvider: AuthProvider;
}
export interface ILocalUserSchema extends IBaseUserSchema {
    username: string;
    password: string;
    isActive: boolean;
}
export interface ILocalUser extends ILocalUserSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IGoogleUserSchema extends IBaseUserSchema {
    googleId: string;
    name: string;
    profilePicUrl: string;
    isActive: boolean;
}
export interface IGoogleUser extends IGoogleUserSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export type IUserSchema = ILocalUserSchema | IGoogleUserSchema;
export type IUser = ILocalUser | IGoogleUser;
export interface APIUserLoginRequest {
    message: string;
    data: IUser;
}
export {};
