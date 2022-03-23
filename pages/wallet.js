import Navbar from "../components/Navbar";

const wallet = () => {
  return (
    <>
      <Navbar />
      <main className="p-8 pt-24 flex flex-col-reverse">
        <div className="p-4 mt-4 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Transactions</h3>
          <table>
            <tr className="text-left">
              <th>#</th>
              <th>Date</th>
              <th>Address</th>
              <th>Amount</th>
            </tr>
            <tr className="">
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
          </table>
        </div>

        <div className="w-full flex justify-between items-center">
          <h4 className="text-xl font-medium border-2 border-red-500 px-4 py-1 rounded-3xl">
            Balance: 1.000 ETH
          </h4>

          <ul className="flex justify-around items-center gap-4">
            <li>
              <button className="bg-red-500 hover:bg-red-700 active:bg-red-500 text-white px-4 py-1 rounded-3xl transition">
                Send
              </button>
            </li>
            <li>
              <button className="bg-green-500 hover:bg-green-700 active:bg-green-500 text-white px-4 py-1 rounded-3xl transition">
                Receive
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default wallet;
