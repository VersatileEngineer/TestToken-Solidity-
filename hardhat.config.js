require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_PROVIDER,
      accounts: [process.env.DEPLOYER_TEST]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    apiKey: {
      sepolia: process.env.SEPOLIA_KEY,
    }
  },
};