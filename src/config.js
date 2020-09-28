const dev = {
  STRIPE_KEY: "",
  s3: {
    REGION: "",
    BUCKET: ""
  },
  apiGateway: {
    REGION: "",
    URL: ""
  },
  cognito: {
    REGION: "",
    USER_POOL_ID: "",
    APP_CLIENT_ID: "",
    IDENTITY_POOL_ID: ""
  }
};

const prod = {
  STRIPE_KEY: "",
  s3: {
    REGION: "",
    BUCKET: ""
  },
  apiGateway: {
    REGION: "",
    URL: ""
  },
  cognito: {
    REGION: "",
    USER_POOL_ID: "",
    APP_CLIENT_ID: "",
    IDENTITY_POOL_ID: ""
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  AWS_DEFAULT_REGION: "us-east-2",
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
