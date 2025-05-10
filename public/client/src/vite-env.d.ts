/// <reference types="vite/client" />

interface Window {
  ethereum?: import("ethers").providers.ExternalProvider;
  web3?: import("web3").Web3;
}
