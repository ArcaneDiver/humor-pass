import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import '@typechain/hardhat';
import 'hardhat-docgen';

import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.ALCHEMY_RPC_TESTNET || 'https://rpc-mumbai.matic.today',
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.ALCHEMY_RPC_MAINNET || 'https://polygon-rpc.com/',
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
  docgen: {
    clear: true,
    runOnCompile: true,
  },
  solidity: '0.8.9',
};

export default config;
