interface IGoogleDriveErrorResponse {
    error: string;
}
interface IGoogleDriveData {
    fileId: string;
    publicLink: string;
}
interface IGoogleDriveSuccessResponse {
    message: string;
    data: IGoogleDriveData;
}
export type IGoogleDriveResponse = IGoogleDriveErrorResponse | IGoogleDriveSuccessResponse;
export {};
