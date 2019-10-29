const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-6wbhcogxihbo"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://sbigg1dibe.execute-api.us-east-2.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_l7DIHcmKz",
    APP_CLIENT_ID: "4k73l09jd81j9h27ii6to55b2h",
    IDENTITY_POOL_ID: "us-east-2:9f88b06d-8ae7-4565-bcf0-6d5244990522"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_LvcoovDotThQ9oZ5Jb5jWjLp00XjM6Vkpf",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1h5n5ttet1hy0"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://api.serverless-stack.seed-demo.club/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TwYpMXIJH",
    APP_CLIENT_ID: "6kfg0o7qo2i3ndk2ur906sc5fd",
    IDENTITY_POOL_ID: "us-east-1:f4c754b4-24f0-4754-8596-30afedece1fc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
