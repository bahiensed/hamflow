import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URL) {
    return console.log('Connection not possible. Missing MONGODB_URL...');
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'hamflow'
    })

    isConnected = true;

    console.log('MongoDB successfully connected!');
  } catch (error) {
    console.log('MongoDB connection failed...', error)
  }
}
