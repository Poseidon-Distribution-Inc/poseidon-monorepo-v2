export interface IFileSchema {
    ownerId: string;
    fileId: string;
    publicLink: string;
    type: "profile" | "company";
}
export interface IFile extends IFileSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
