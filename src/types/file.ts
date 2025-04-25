export interface IFileSchema {
  userId: string;
  fileId: string;
  fileName: string;
  mimeType: string;
  publicLink: string;
  type: "profile" | "company";
}

export interface IFile extends IFileSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
