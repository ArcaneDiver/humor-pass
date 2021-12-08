import { ethers } from 'hardhat';
import fs from 'fs';
import path from 'path';

const main = async () => {
  const Counter = await ethers.getContractFactory('Counter');
  const counter = await Counter.deploy();
  await counter.deployed();
  console.log(`Counter contract deployed at: ${counter.address}`);

  const config = `
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    export const counterContractAddress: string =
      '${counter.address}';

    if (counterContractAddress === '')
      throw new Error('Missing addresses, need contract compilation');

  `;

  fs.writeFileSync(path.resolve('src', 'addresses.ts'), config);
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
