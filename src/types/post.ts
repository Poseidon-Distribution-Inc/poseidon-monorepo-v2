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
    size: string;
    commodity: string;
    weight: string;
    truckType: string;
    packaging: string;
    pickupDate:string;
    deliveredDate: string;
    pickupLocation: string;
    dropOffLocation: string;
    receiverName: string;
    receiverContact: string;
    senderName:string;
    companyName:string;
    senderContact: string;
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
