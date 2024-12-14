import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});


export const generateSignedUrl = (key) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,   
    Expires: 3600  
  };
  return s3.getSignedUrl('getObject', params); 
};