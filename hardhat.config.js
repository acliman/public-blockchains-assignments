require("@nomicfoundation/hardhat-toolbox");

const res = require('dotenv').config();

// You may also use Alchemy.
const INFURA_KEY = process.env.INFURA_KEY;
const INFURA_URL = process.env.INFURA_GOERLI_API_URL;
const GOERLI_RPC_URL = `${INFURA_URL}${INFURA_KEY}`;
const NOT_UNIMA_URL_1 = process.env.NOT_UNIMA_URL_1;
const NOT_UNIMA_URL_2 = process.env.NOT_UNIMA_URL_2;

// console.log(GOERLI_RPC_URL);
// console.log('------------------------')

// Beware: NEVER put real Ether into testing accounts.
const HH_PRIVATE_KEY_1 = process.env.METAMASK_1_PRIVATE_KEY; 
const HH_PRIVATE_KEY_2 = process.env.METAMASK_2_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  defaultNetwork: "unima1",

  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },

  networks: {
    
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [ HH_PRIVATE_KEY_1, HH_PRIVATE_KEY_2 ],
    },
    
    unima1: {
      url: NOT_UNIMA_URL_1,
      accounts: [ HH_PRIVATE_KEY_1, HH_PRIVATE_KEY_2 ],
    },
    
    unima2: {
      url: NOT_UNIMA_URL_2,
      accounts: [ HH_PRIVATE_KEY_1, HH_PRIVATE_KEY_2 ],
    }

  }
};

// const Web3 = require('web3');

// const providerUrl = 'https://mainnet.infura.io/v3/your-project-id';
// const web3 = new Web3(providerUrl);

// web3.eth.net.getNetworkType()
//   .then(network => {
//     console.log(`Connected to ${network} network`);
//   })
//   .catch(error => {
//     console.error(`Error connecting to network: ${error}`);
//   });
