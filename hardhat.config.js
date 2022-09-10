/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
      compilers: [
        {
          version: "0.8.9",
        }
      ],
    },
    paths: {
      sources: "./backend/src/contracts",
      artifacts: "./backend/src/contracts/compiledContracts",
      cache: "./backend/src/contracts/cache"
    }
  };
