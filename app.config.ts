import "dotenv/config";

export default {
  expo: {
    name: "reactnative-ios",
    slug: "reactnative-ios",
    version: "1.0.0",
    assetBundlePatterns: ["**/*"],
  },
  assets: ["./assets/fonts"],
  extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectID: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  },
};
