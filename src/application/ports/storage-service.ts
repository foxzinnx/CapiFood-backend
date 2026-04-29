export interface UploadParams {
    fileName: string;
    fileType: string;
    fileBuffer: string;
    folder: string;
}

export interface StorageService {
    upload(params: UploadParams): Promise<string>;
    delete(fileUrl: string): Promise<void>;
}