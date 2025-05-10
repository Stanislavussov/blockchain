import fs from "fs";
import path from "path";

const abiPath = path.join("public/client/src/abi");
const abiFile = path.join(abiPath, "TurboContract.abi.json");

fs.mkdirSync(abiPath, { recursive: true });

const contract = JSON.parse(
  fs.readFileSync(
    "artifacts/contracts/TurboContract.sol/TurboContract.json",
    "utf8"
  )
);

fs.writeFileSync(abiFile, JSON.stringify(contract.abi, null, 2));
console.log("✅ ABI saved to", abiFile);
