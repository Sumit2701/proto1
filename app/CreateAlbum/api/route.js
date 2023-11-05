import { createPresignedPost } from '../../../util/s3';

export async function GET() {
  console.log("get ali")
    const { key, content_type } = req.query;
    try {
      // Proceed to generate the signed URL or perform other operations using key and content_type
      const url = await createPresignedPost({ key, contentType: content_type });
      res.send({ url });
    } catch (error) {
      // Handle errors appropriately
      res.status(500).send({ error: 'Error generating the pre-signed URL' });
    }
 
}