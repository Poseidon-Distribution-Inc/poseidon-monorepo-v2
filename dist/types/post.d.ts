export interface IPostSchema {
    id: string;
    orderNum: string;
    referenceNum: string;
    posterId: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
export interface IPost extends IPostSchema {
    name: string;
    email: string;
    contactNum: string;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpZipCode: string;
    dropOffZipCode: string;
    size: string;
    type: string;
    message: string;
    status: string;
}
interface APIPostErrorResponse {
    error: string;
}
interface APIPostSuccessResponse {
    message: string;
    data: IPost | IPost[];
}
export type APIPostResponse = APIPostSuccessResponse | APIPostErrorResponse;
export interface APICreatePostRequest {
    posts: IPost;
}
export interface APIUpdatePostRequest {
    post: Partial<IPost>;
}
export {};
