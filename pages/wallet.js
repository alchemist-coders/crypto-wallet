import { useContext, useState } from "react";

import Navbar from "../components/Navbar";
import Send from "../components/Send";
import Receive from "../components/Receive";

import { Web3Context } from "../utils/Web3Provider";

const wallet = () => {
  const [openSend, setOpenSend] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const { account, balance, connect } = useContext(Web3Context);

  return (
    <>
      <Navbar />
      {account ? (
        <main className="p-8 pt-24 flex flex-col-reverse">
          <div className="p-4 mt-4 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Transactions</h3>
            <table>
              <thead className="text-left">
                <tr className="text-left">
                  <th>#</th>
                  <th>Date</th>
                  <th>Address</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>12-03-2001</td>
                  <td>0xa2cexxxxdf76</td>
                  <td>1 ETH</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>12-03-2001</td>
                  <td>0xa2cexxxxdf76</td>
                  <td>1 ETH</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>12-03-2001</td>
                  <td>0xa2cexxxxdf76</td>
                  <td>1 ETH</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>12-03-2001</td>
                  <td>0xa2cexxxxdf76</td>
                  <td>1 ETH</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>12-03-2001</td>
                  <td>0xa2cexxxxdf76</td>
                  <td>1 ETH</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full flex justify-between items-center">
            <h4 className="text-xl font-medium border-2 border-red-500 px-4 py-1 rounded-3xl">
              Balance: {(balance / 1e18).toFixed(4)} ETH
            </h4>

            <ul className="flex justify-around items-center gap-4">
              <li>
                <button
                  onClick={setOpenSend.bind(this, true)}
                  className="bg-red-500 hover:bg-red-700 active:bg-red-500 text-white px-4 py-1 rounded-3xl transition"
                >
                  Send
                </button>
              </li>
              <li>
                <button
                  onClick={setOpenReceive.bind(this, true)}
                  className="bg-green-500 hover:bg-green-700 active:bg-green-500 text-white px-4 py-1 rounded-3xl transition"
                >
                  Receive
                </button>
              </li>
            </ul>
          </div>

          <Send open={openSend} setOpen={setOpenSend} />
          <Receive open={openReceive} setOpen={setOpenReceive} />
        </main>
      ) : (
        <main className="h-screen p-8 pt-24 flex flex-col justify-center items-center gap-4">
          <p className="text-red-500 text-2xl">
            Please connect wallet to access this page
          </p>
          <button
            onClick={connect}
            className="bg-red-500 text-2xl text-white px-8 py-2 rounded-3xl"
          >
            Connect Wallet
          </button>
        </main>
      )}
    </>
  );
};

export default wallet;
