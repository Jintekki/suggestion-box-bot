import mongoose from "mongoose";
const mongoDBConnect = async (connectionString) => {
    try {
        const connect = await mongoose.connect(connectionString);
        mongoose.set("strictQuery", true);
        console.log("MongoDB connected...");
        console.log(`Hostname: ${connect.connection.host}`);
    }
    catch (err) {
        console.error(err);
    }
};
export default mongoDBConnect;
