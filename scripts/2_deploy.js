// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // get signer
  const [wallet1] = await ethers.getSigners();

  // ElonToken 배포
  const ElonToken = await hre.ethers.getContractFactory("ElonToken");
  const elonToken = await ElonToken.deploy();
  await elonToken.deployed();
  console.log("elonToken.address : ",elonToken.address);

  // ElonToken에 TokenId 1번으로 elon.PNG 민트
  const mintTx = await elonToken.safeMint(wallet1.address, 1, "bafyreibulpo7awvhokoa2tjzsloxz6sfhftp5nk7zes26tkk5ns7a5pjqq/metadata.json");
  const receipt = await mintTx.wait();
  console.log(receipt)
  
  // ElonToken에 TokenId 2번으로 elon2.PNG 민트
  const mintTx2 = await elonToken.safeMint(wallet1.address, 2, "bafyreibutlf24m4s6wx3szvjgixhrdvxbw6wu5hvpvxkg6cp4nfg5amjkm/metadata.json");
  const receipt2 = await mintTx.wait();
  console.log(receipt2)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

