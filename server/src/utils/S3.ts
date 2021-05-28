import S3 from "aws-sdk/clients/s3";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const secretAccessKey = "gAI/eNF2PvtI5A3Fd8RtqsJH9RAzsm9bv5lhOcU4";
const accessKey = "AKIA6BRJDQBEQY4PX74T";

const s3 = new S3({
    credentials: { secretAccessKey: secretAccessKey, accessKeyId: accessKey },
});

export const exportFile = async (
    image: Express.Multer.File
): Promise<string> => {
    const imageKey = `${uuidv4()}.${path.extname(image.originalname)}`;

    const params = {
        ACL: "public-read",
        Body: image.buffer,
        Bucket: "zimaletto",
        Key: imageKey,
    };
    return new Promise(function (resolve, reject) {
        s3.putObject(params, function (err) {
            if (err) {
                return reject(err);
            }

            return resolve(
                `https://zimaletto.s3.eu-central-1.amazonaws.com/${imageKey}`
            );
        });
    });
};
