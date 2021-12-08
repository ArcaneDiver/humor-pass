// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const counterContractAddress: string =
  '0x5FbDB2315678afecb367f032d93F642f64180aa3';

if (counterContractAddress === '')
  throw new Error('Missing addresses, need contract compilation');
