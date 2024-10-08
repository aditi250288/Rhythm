const mongoose = require('mongoose');
const Song = require('../models/Song'); // Adjust the path to your Song model
const songsData = require('../data/songs.json'); // Path to your JSON file with songs
require('dotenv').config();

// Step 1: Create a reusable function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aditiapte88:" + process.env.PWD + "@db.axgi0.mongodb.net/?retryWrites=true&w=majority&appName=Db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the process if there's a connection error
  }
};

// Step 2: Function to insert songs into MongoDB
const insertSongs = async () => {
  try {
    await connectDB(); // Call the connection function
    await Song.insertMany(songsData); // Insert the song data
    console.log('Songs inserted successfully!');
  } catch (error) {
    console.error('Error inserting songs:', error);
  } finally {
    mongoose.connection.close(); // Close the MongoDB connection after insertion
  }
};

// Step 3: Call the insertSongs function
insertSongs();
