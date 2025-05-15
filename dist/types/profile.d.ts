type Certification = string | {
    name: string;
    number: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
};
export interface IProfileSchema {
<<<<<<< HEAD
    userId: string;
    name: string;
    email: string;
    contactNum?: string;
    address?: string;
    bio?: string;
    specialties?: string[];
    certificationsAndLicenses?: Certification[];
    equipmentTypes?: string[];
    isActive: boolean;
=======
    profileName?: String;
    photoUrl?: string[];
    fullname?: String;
    contact?: String;
    address?: String;
    about?: String;
    userId: string;
    isActive?: boolean;
>>>>>>> c8a217c28df07fc41355d7a401a02518c970e33f
}
export interface IProfile extends IProfileSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIProfileErrorResponse {
    error: string;
}
interface APIProfileSuccessResponse {
    message: string;
    data: IProfile | IProfile[];
}
export type APIProfileResponse = APIProfileSuccessResponse | APIProfileErrorResponse;
export interface APICreateProfileRequest {
    profiles: IProfile;
}
export interface APIUpdateProfileRequest {
    profile: Partial<IProfile>;
}
export {};
