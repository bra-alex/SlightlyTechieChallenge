import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL!

mongoose.connection.on('open', () => console.log('Connected to mongo'))
mongoose.connection.on('error', (e: any) => console.error(e))

export async function mongoConnect() {
  await mongoose.connect(MONGO_URL)
}
