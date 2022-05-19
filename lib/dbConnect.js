//https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose
 const logSuccess = () =>(console.log('###Connection with MongoDB ok!'))

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    console.log('###Trying to connect to MongoDB...');

  if (cached.conn) {
    logSuccess()
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        logSuccess()
      return mongoose
    })
  }
  cached.conn = await cached.promise
  logSuccess()
  return cached.conn
}

export default dbConnect