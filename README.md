# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

const [owner] = await ethers.getSigners();
const Turbo = await ethers.getContractFactory("TurboContract");
const myToken = Turbo.attach("0x...");
const balance = await myToken.balanceOf(await owner.getAddress());
balance.toString();

ADDRESS=0x84cCF7d3DaDD90bC1E8617F09852aB1069B5fcA9
