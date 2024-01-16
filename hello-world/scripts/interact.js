const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
    const HelloWorldFactory = await ethers.getContractFactory("HelloWorld");
    HelloWorldContract = await HelloWorldFactory.attach(CONTRACT_ADDRESS);

    // Reading the current message stored
    const message = await HelloWorldContract.message();
    console.log("the message is " + message);

    // Updating the current message
    const tx = await HelloWorldContract.update("Good Bye, World!");
    await tx.wait();

    const newMessage = await HelloWorldContract.message();
    console.log("the new message is " + newMessage);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })
