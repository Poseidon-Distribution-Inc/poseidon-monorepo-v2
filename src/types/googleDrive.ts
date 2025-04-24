interface IGoogleDriveErrorResponse {
  error: String;
}

interface IGoogleDriveData {
  fileId: String;
  publicLink: String;
}

interface IGoogleDriveSuccessResponse {
  message: String;
  data: IGoogleDriveData;
}

export type IGoogleDriveResponse =
  | IGoogleDriveErrorResponse
  | IGoogleDriveSuccessResponse;
