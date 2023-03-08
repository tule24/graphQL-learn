import mongoose from "mongoose"
// connect DB
export const connectDB = async (uri) => {
    mongoose.set('strictQuery', false)
    return mongoose.connect(uri)
        .then(() => console.log("CONNECT TO THE DB..."))
        .catch((err) => {console.log(err); process.exit(1)})
}