require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.13",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        fantomtest: {
            url: 'https://rpc.testnet.fantom.network',
            accounts: [
            ]
        }
    },
};
