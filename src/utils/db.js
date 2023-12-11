import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tetisShop', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
}

function convertToObj(doc) {
  const convertedDoc = doc.toObject();
  convertedDoc._id = convertedDoc._id.toString();
  return convertedDoc;
}

const db = { connect, disconnect, convertToObj };

export default db;
