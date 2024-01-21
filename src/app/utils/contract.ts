// contract.ts
import { ethers } from 'ethers';
import { signer } from './ethers';

const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "studentName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "studentID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "studentClass",
				"type": "string"
			}
		],
		"name": "addStudentDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "studentID",
				"type": "uint256"
			}
		],
		"name": "getstudentDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "studentDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "class",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; 

interface YourContractMethods {
	addStudentDetails: (studentName: string, studentID: number, studentClass: string) => Promise<any>;
  getStudentDetails: (studentName: string) => Promise<[string, number, string]>;
  // Add other methods if necessary
}

const contract = new ethers.Contract(contractAddress, contractABI) as ethers.Contract & YourContractMethods;

export default contract;
