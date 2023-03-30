import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
  throw new Error("Please defined the mogodb URI variable inside .env.local");
}

let catched = global.mongoose;

if (!catched) {
  catched = global.mongoose = { conn: null, promise: null };
}

async function dbconnect() {
  if (catched.conn) {
    return catched.con;
  }

  if (!catched.promise) {
    const opts = {
      bufferCommands: false,
    };
    catched.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  catched.conn = await catched.promise;
  return catched.conn;
}

export default dbconnect;
