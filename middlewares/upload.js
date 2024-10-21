import multer from 'multer';
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const coverUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/library/*'
    }),
    preservePath: true
})