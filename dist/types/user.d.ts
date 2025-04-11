type AuthProvider = "local" | "google";
type UserRole = "admin" | "super_admin" | "subscriber" | "service_provider";
interface IBaseUserSchema {
    id: string;
    name: string;
    email: string;
    address?: string;
    phoneNumber?: string;
    role: UserRole;
    authProvider: AuthProvider;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
export interface ILocalUserSchema extends IBaseUserSchema {
    password: string;
}
export interface ILocalUser extends ILocalUserSchema {
}
export interface IGoogleUserSchema extends IBaseUserSchema {
    googleId: string;
    name: string;
    profilePicUrl: string;
}
export interface IGoogleUser extends IGoogleUserSchema {
}
export type IUserSchema = ILocalUserSchema | IGoogleUserSchema;
export type IUser = ILocalUser | IGoogleUser;
export interface APIUserLoginRequest {
    email: string;
    password: string;
}
interface APIGetUserErrorResponse {
    error: string;
}
interface APIGetUserSuccessResponse {
    message: string;
    data?: IUser | IUser[] | string;
}
export interface APIGetUserRequest {
    role?: string;
    email?: string;
    userId?: string;
    status?: string;
    isActive?: boolean;
    token?: string;
    currentPassword?: string;
    newPassword?: string;
}
export type APIUserResponse = APIGetUserSuccessResponse | APIGetUserErrorResponse;
export {};
