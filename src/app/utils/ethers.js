import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:3000');
const signer = provider.getSigner();

export { provider, signer };

