import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName:'resume_DB'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log('DB Connnected Successfully....')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB