type AuthProvider = "local" | "google";

interface IBaseUserSchema {
  email: string;
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

// API RES REQ TYPES

export interface APIUserLoginRequest {
  message: string;
  data: IUser;
}
