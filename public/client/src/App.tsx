import { useEffect, useState } from "react";
import Web3 from "web3";
import TurboContractApplicationBinaryInterface from "./abi/TurboContract.abi.json";

const META_MASK_ACCOUNT_ADDRESS = "0x84cCF7d3DaDD90bC1E8617F09852aB1069B5fcA9";

export const App = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        const contract = new web3Instance.eth.Contract(
          TurboContractApplicationBinaryInterface,
          META_MASK_ACCOUNT_ADDRESS
        );
        const rawBalance: string = await contract.methods
          .balanceOf(accounts[0])
          .call();
        const formatted = web3Instance.utils.fromWei(rawBalance, "ether");
        setBalance(formatted);
      } else {
        alert("Please install MetaMask");
      }
    };

    init();
  }, []);

  const transfer = async () => {
    if (!web3) return;
    const contract = new web3.eth.Contract(
      TurboContractApplicationBinaryInterface,
      META_MASK_ACCOUNT_ADDRESS
    );
    const value = web3.utils.toWei(amount, "ether");
    await contract.methods.transfer(recipient, value).send({ from: account });
    alert("Transfer complete");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>TurboContract dApp</h2>
      <p>
        <strong>Account:</strong> {account}
      </p>
      <p>
        <strong>Balance:</strong> {balance} TUR
      </p>
      <div>
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={transfer}>Transfer</button>
      </div>
    </div>
  );
};
