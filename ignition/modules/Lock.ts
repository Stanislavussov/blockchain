// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TurboModule = buildModule("TurboModule", (m) => {
  const initialTurboSupply = m.getParameter("initialTurboSupply", 1_000_000);
  const turboToken = m.contract("TurboContract", [initialTurboSupply]);

  return { turboToken };
});

export default TurboModule;
