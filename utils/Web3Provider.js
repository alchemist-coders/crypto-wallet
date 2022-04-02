import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const Web3Context = React.createContext(null);

const Web3Provider = ({ children }) => {
  const router = useRouter();

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [network, setNetwork] = useState(null);

  const updateAccount = async () => {
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const balance = await ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        });

        setAccount(accounts[0]);
        setBalance(Number(balance));
      } else {
        setAccount(null);
        setBalance(null);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const updateNetwork = async () => {
    try {
      const network = await ethereum.request({ method: "net_version" });
      setNetwork(Number(network));
    } catch (error) {
      handleError(error);
    }
  };

  const connect = async () => {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });

      updateAccount();
      updateNetwork();
    } catch (error) {
      handleError(error);
    }
  };

  const disconnect = () => {
    setAccount(null);
    setBalance(null);
    setNetwork(null);
  };

  const handleError = ({ code, message }) => {
    if (code === 4001) {
      console.error("Please connect to MetaMask");
    } else {
      console.error(message);
    }

    disconnect();
  };

  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider({ mustBeMetaMask: true });

      updateAccount();
      updateNetwork();

      if (provider) {
        window.ethereum = provider;

        ethereum.on("connect", connect);
        ethereum.on("disconnect", disconnect);
        ethereum.on("accountsChanged", updateAccount);
        ethereum.on("chainChanged", updateNetwork);
      } else {
        window.ethereum = undefined;
      }
    })();
  }, []);

  return (
    <Web3Context.Provider
      value={{ connect, disconnect, account, balance, network }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export { Web3Provider as default, Web3Context };
