const ModalOrder = ({ isShow, setIsShow , variant , count , price }) => {
  return (
    <section
      className={`flex justify-center items-center h-[100vh] w-full bg-slate-500 bg-opacity-30 absolute ${
        isShow ? "block" : "hidden"
      }`}
    >
      <div className="bg-white flex flex-col text-start p-10 rounded-2xl">
        <h1 className="text-4xl mb-10">Total Pembayaran</h1>
        <div>
          <h1 className="text-lg font-semibold mb-3">Macaroon</h1>
          <div className="grid grid-cols-3 gap-x-10">
            <p>Variant</p>
            <p>Jumlah</p>
            <p>Total</p>
            <p>{variant || ""}</p>
            <p>{count || ""}</p>
            <p>{`Rp. ${price}` || ""}</p>
          </div>
        </div>
        <div className="mt-10">
          <button
            className="py-2 px-12 border rounded-xl bg-green-500 text-lg font-semibold text-white w-full"
            onClick={() => setIsShow(false)}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalOrder;
