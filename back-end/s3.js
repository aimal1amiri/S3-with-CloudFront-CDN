import aws from 'aws-sdk'
import dotenv from 'dotenv'


dotenv.config();

const region='eu-north-1'

const accessKeyId=process.env.AWS_ACCESS_KEY
//const secretAccessKey=''
const bucketName='media-upload-bucket-s3'




const s3Bucket=new aws.S3({
    region,
    accessKeyId,
    //secretAccessKey,
    signatureVersion:'4'
})