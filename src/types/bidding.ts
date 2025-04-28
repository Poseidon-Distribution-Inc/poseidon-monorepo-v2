export type biddingStatusEnum =
    | "pending"
    | "accepted"
    | "rejected"
    | "cancelled";
import { IPost } from "../types/post";
export interface IBiddingSchema {
    postDetail: string;
    bidderId: string;
    biddingAmount: string;
    status: biddingStatusEnum;
    isActive: boolean;
}
export interface IBidding extends IBiddingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
