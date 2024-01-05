
import { createPresignedPost } from "./s3.js";

export async function GET(req) {
  // console.log(req.nextUrl)
  const key= getQSParamFromURL("key", req.url)
  const content_type= getQSParamFromURL("contentType", req.url)
  
  const url = await createPresignedPost({ key, contentType: content_type });
  
  return Response.json(url)

}

export function getQSParamFromURL(
  key,
  url
) {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}
