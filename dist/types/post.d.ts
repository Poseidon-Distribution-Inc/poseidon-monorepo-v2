export interface IPostSchema {
    posterId: string;
    title: string;
    description: string;
    price: number;
    photoUrl: string[];
    quantity: number;
    durationStart: Date;
    durationEnd: Date;
    isActive: boolean;
}
export interface IPost extends IPostSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
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
