const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Step 1: Configure AWS SDK
/*AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your IAM Access Key ID
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Replace with your IAM Secret Access Key
    region: "us-east-1" // Replace with the region of your S3 bucket
  });

const s3 = new AWS.S3();
const BUCKET_NAME = 'rhythm2024'; // Your S3 bucket name

// Step 2: Function to list objects in the S3 bucket
const listFiles = async () => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Prefix: 'MP3 songs/' // Folder path in S3 (adjust as needed)
    };

    const data = await s3.listObjectsV2(params).promise();

    if (!data || !data.Contents || data.Contents.length === 0) {
      throw new Error('No files found in the S3 bucket');
    }

    const songs = data.Contents.map((file) => ({
      name: file.Key.split('/').pop(), // Extract the file name
      track: `https://${BUCKET_NAME}.s3.amazonaws.com/${encodeURIComponent(file.Key)}`,
      thumbnail: 'https://example.com/thumbnails/default-thumbnail.jpg', // Replace with actual thumbnail URLs
      artist: ['603dcdbe6f07a9c5042b1c42'] // Replace with actual artist IDs
    }));

    // Convert the songs array to JSON format
    const jsonData = JSON.stringify(songs, null, 2); // 'null, 2' adds indentation for readability

    // Ensure the directory exists
    const outputDir = path.join(__dirname, '../data');
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
    }

    // Write the JSON data to a file
    fs.writeFileSync(path.join(outputDir, 'songs.json'), jsonData);

    console.log('Song data has been written to data/songs.json');
  } catch (error) {
    console.error('Error listing files from S3:', error.message);
  }
};

// Step 3: Call the function to list files
listFiles();
*/



