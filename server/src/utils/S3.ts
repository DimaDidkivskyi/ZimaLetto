import S3 from "aws-sdk/clients/s3";

const secretAccessKey = "gAI/eNF2PvtI5A3Fd8RtqsJH9RAzsm9bv5lhOcU4";
const accessKey = "AKIA6BRJDQBEQY4PX74T";

const s3 = new S3({
    credentials: { secretAccessKey: secretAccessKey, accessKeyId: accessKey },
});

export const exportFile = async (image: Express.Multer.File) => {
    const params = {
        ACL: "public-read",
        Body: image.buffer,
        Bucket: "zimaletto",
        Key: image.originalname,
    };
    return new Promise(function (resolve, reject) {
        s3.putObject(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
