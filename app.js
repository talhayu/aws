const express = require('express');
const app = express();
const aws = require('aws-sdk');
const dotenv = require('dotenv');


dotenv.config();

const PORT = 8080;

aws.config.update({
    accessKeyId: 'AKIAZOZ4DFY76BQMQW4V',
    secretAccessKey: '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',
    region: 'ap-south-1'
});

const s3 = new aws.S3();

app.get('/image', async (req, res) => {
    const bucketName = 'imagefornodejs';
    const key = 'Products Images941.jpg';

    const params = { Bucket: bucketName, Key: key };
    const s3Object = await s3.getObject(params).promise();

    res.set('Content-Type', s3Object.ContentType);

    res.send(s3Object.Body);
});

app.get('/', async (req, res) => {
    res.send('Hello from AWS deployed service');
});

app.get('/new', async(req, res)=>{
    res.send('New route added')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
