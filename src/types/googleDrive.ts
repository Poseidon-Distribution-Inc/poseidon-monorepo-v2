interface IGoogleDriveErrorResponse {
  error: String;
}

interface IGoogleDriveSuccessResponse {
  fileId: String;
  publicLink: String;
}

export type IGoogleDriveResponse =
  | IGoogleDriveErrorResponse
  | IGoogleDriveSuccessResponse;
