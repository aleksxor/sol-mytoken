const { ethers } = require("hardhat")

async function main() {
    const Token = await ethers.getContractFactory("Token")
    const token = await Token.deploy()

    await token.deployed()

    console.log(`Token contract deployed: ${token.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
