import { ethers } from 'hardhat';

const main = async () => {
  const HumorPass = await ethers.getContractFactory('HumorPass');
  const humorPass = await (await HumorPass.deploy()).deployed();

  console.log(`HumorPass contract deployed at: ${humorPass.address}`);

  const tx = await humorPass.safeMint();
  console.log(`Minted NFTs with tx: ${tx.blockHash}`);
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
