const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  // console.log(Deploying  Contracts with the account: ${deployer.address});

  const WalletTask = await ethers.getContractFactory("WalletTask");
  console.log("\nDeploying WalletTask...");
  const walletTask = await WalletTask.deploy();
  await walletTask.deployed();
  console.log("WalletTask Deployed at...", walletTask.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
