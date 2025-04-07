export interface ISubscriptionSchema {
    subscriberId: string;
    postId: string;
    isActive: boolean;
}

export interface ISubscription extends ISubscriptionSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

interface APISubscriptionErrorResponse {
    error: string;
}

interface APISubscriptionSuccessResponse {
    message: string;
    data: ISubscription | ISubscription[];
}

export type APISubscriptionResponse =
    | APISubscriptionSuccessResponse
    | APISubscriptionErrorResponse;

export interface APICreateSubscriptionRequest {
    subscriptions: ISubscription;
}

export interface APIUpdateSubscriptionRequest {
    subscription: Partial<ISubscription>;
}
