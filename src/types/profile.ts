export interface IProfileSchema {
  profileName?: String;
  photoUrl?: string[];
  fullname?: String ;
  contact?: String ;
  address?: String ;
  about?: String ;
  userId: string;
  isActive?: boolean;
}

export interface IProfile extends IProfileSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

/* TYPES FOR API REQUESTS */

// General Response
interface APIProfileErrorResponse {
  error: string;
}

interface APIProfileSuccessResponse {
  message: string;
  data: IProfile | IProfile[];
}

export type APIProfileResponse =
  | APIProfileSuccessResponse
  | APIProfileErrorResponse;

// Get Profiles Request

export interface APICreateProfileRequest {
  profiles: IProfile;
}

export interface APIUpdateProfileRequest {
  profile: Partial<IProfile>;
}
