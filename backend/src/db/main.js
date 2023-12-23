import mongoose from "mongoose";

export const main = async () => {
    console.log('Connecting to authdev db @mongod:/127.0.0.1:27017/authdev');
    try {
        console.log(process.env.DBURI);
        await mongoose.connect(`${process.env.DBURI}`)
        console.log('Connected to auth  db');
    } catch (err) {
        console.log(`error connecting to DB ${err.message}`);
    }
}
