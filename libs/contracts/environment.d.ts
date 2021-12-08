declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALCHEMY_RPC_MAINNET: string;
      ALCHEMY_RPC_TESTNET: string;
      ACCOUNT_PRIVATE_KEY: string;
    }
  }
}

export {};
