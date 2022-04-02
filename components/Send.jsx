import Modal from "./Modal";

const Send = ({ open, setOpen }) => {
  if (open === undefined || setOpen === undefined)
    throw new Error('"open" or "setOpen" parameters cannot be undefined');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = [...new FormData(e.target)].reduce(
      (prev, [key, value]) => ({ ...prev, [key]: value }),
      {}
    );

    console.log(data);
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Send">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around gap-2"
      >
        <label className="mt-4 px-2 text-lg" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address of the Receiver"
          className="px-2 py-1 rounded-lg"
        />

        <label className="mt-4 px-2 text-lg" htmlFor="amount">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          placeholder="Amount to Send"
          className="px-2 py-1 rounded-lg"
        />

        <div className="mt-4 grid grid-cols-2 gap-4">
          <button type="submit" className="px-4 py-2 text-white text-lg rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-500 outline-none">
            Send
          </button>
          <button type="button" onClick={setOpen.bind(this, false)} className="px-4 py-2 text-white text-lg rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-500 outline-none">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Send;
