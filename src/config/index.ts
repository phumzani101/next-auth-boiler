const config = {
  mongodbUrl: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/nextauthdb",
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
};

export default config;
