import config from "@/config";
import mongoose from "mongoose";

const mongodbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(config.mongodbUrl);
    console.log("Mongodb connected");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default mongodbConnect;
