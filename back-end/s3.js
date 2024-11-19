import aws from 'aws-sdk'
import dotenv from 'dotenv'
import crypto, { randomBytes } from 'crypto'
import { promisify } from 'util';


//const randomBytes = promisify(crypto.randomBytes)
dotenv.config();

const region='eu-north-1'

const accessKeyId=process.env.AWS_ACCESS_KEY
//const secretAccessKey=''
const bucketName='media-upload-bucket-s3'




const s3Bucket=new aws.S3({
    region,
    accessKeyId,
    //secretAccessKey,
    signatureVersion:'v4'
})

export async function generateUpLoading(){
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params=({
        Bucket: bucketName,
        Key:imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}