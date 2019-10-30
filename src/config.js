const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-2",
    BUCKET: "wanda-quilts"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://3kl73n4tjk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_l7DIHcmKz",
    APP_CLIENT_ID: "4k73l09jd81j9h27ii6to55b2h",
    IDENTITY_POOL_ID: "us-east-2:0a42de85-da60-4a25-88dc-897de3628657"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_LvcoovDotThQ9oZ5Jb5jWjLp00XjM6Vkpf",
  s3: {
    REGION: "us-east-2",
    BUCKET: "wanda-quilts"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://3kl73n4tjk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_l7DIHcmKz",
    APP_CLIENT_ID: "4k73l09jd81j9h27ii6to55b2h",
    IDENTITY_POOL_ID: "us-east-2:0a42de85-da60-4a25-88dc-897de3628657"
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
