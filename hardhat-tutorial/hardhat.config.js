require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

//WhitList Contract Address: 0x678C94bDb1cF17480f5aC6b642F64104eda02bae

module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            url: ALCHEMY_API_KEY_URL,
            accounts: [RINKEBY_PRIVATE_KEY],
        },
    },
};