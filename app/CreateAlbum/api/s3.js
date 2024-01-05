import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


const s3 = new S3Client({
  region: "ap-south-1",
  
  credentials: {
    accessKeyId: 'AKIAVAY63VTWKGBUPB5F',   
    secretAccessKey: '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',
  },
});

const BUCKET_NAME = 'pixelselect';

export async function createPresignedPost({ key, contentType }) {
  console.log(key,contentType)
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const fileLink = `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${key}`;

  const signedUrl = await getSignedUrl(s3, command, {
    expiresIn: 5 * 60, // 5 minutes - default is 15 mins
  });

  return { fileLink, signedUrl };
}