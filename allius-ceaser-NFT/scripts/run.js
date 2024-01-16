const {ethers} = require("hardhat");

async function main(){

  const deployNFTContract = await ethers.deployContract("AlliusCeaserNFT");

  const ceaser = await deployNFTContract.waitForDeployment();

  console.log("AlliusCeaser NFT contract address is:", await ceaser.getAddress());

  console.log("Minting NFT...");
  let txn = await ceaser.mintNFT();
  await txn.wait();
  console.log("Yayy.. NFT minted successfully!!!");
}

main().then(() => process.exit(0))
.catch((err) => {
  console.error(err);
  process.exit(1);
})
