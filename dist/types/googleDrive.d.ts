interface GoogleDriveErrorResponse {
    error: String;
}
interface GoogleDriveSuccessResponse {
    fileId: String;
    publicLink: String;
}
export type GoogleDriveResponse = GoogleDriveErrorResponse | GoogleDriveSuccessResponse;
export {};
