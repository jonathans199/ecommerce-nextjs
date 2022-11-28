import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-nextjs');
  return handler(req, res);
};

console.log('mongodb://127.0.0.1:27017/ecommerce-nextjs')

export default connectDb;
