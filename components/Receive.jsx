import { useContext } from "react";

import Modal from "./Modal";

import { Web3Context } from "../utils/Web3Provider";

const Send = ({ open, setOpen }) => {
  const { account } = useContext(Web3Context);

  const copy = (text = null) => {
    navigator.clipboard.writeText(text);
  };

  const handleClick = (e) => {
    copy(account);
    e.target.innerText = "Copied!";
    setTimeout(() => (e.target.innerText = "Copy"), 500);
  };

  if (open === undefined || setOpen === undefined)
    throw new Error('"open" or "setOpen" parameters cannot be undefined');

  return (
    <Modal open={open} setOpen={setOpen} title="Receive">
      <div className="flex flex-col justify-around gap-2">
        <p className="text-gray-700">
          Share your wallet address to receive Ethers in this account
        </p>
        <div className="my-4 flex justify-center items-center rounded-3xl text-lg text-center overflow-hidden">
          <p className="pl-4 pr-2 py-1 bg-red-500 text-white">Address:</p>
          <p className="grow py-1">
            {account.slice(0, 8) + "xxxx" + account.slice(-8)}
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="pl-2 pr-4 py-1 bg-red-500 text-white"
          >
            Copy
          </button>
        </div>

        <button
          type="button"
          onClick={setOpen.bind(this, false)}
          className="px-4 py-2 text-white text-lg rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-500 outline-none"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Send;
