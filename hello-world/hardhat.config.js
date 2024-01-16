require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/s7ypqu8C6n0h2UrXk-o2ZHbFMFJoGq9j",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
