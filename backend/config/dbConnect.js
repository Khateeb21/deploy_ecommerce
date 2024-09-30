import mongoose from "mongoose";

export const connectDatabase = () => {
  let DB_URI = "";

  if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
  if (process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;

console.log("db_uri",DB_URI)
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((con) => {

  console.log(`MongoDB connected with host: ${con.connection.host}`);
}).catch((err) => {

  console.error('Error connecting to MongoDB:', err);}

)}
