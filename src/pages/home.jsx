import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center h-[100vh] bg-yellow-200">
      <div className="container grid grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-12 col-span-1">
          <div>
            <h1 className="text-3xl font-semibold">Ice Cream</h1>
            <h2 className="text-8xl leading-none font-semibold">Scoop Scoop</h2>
          </div>
          <button
            className="py-5 px-12 bg-green-400 rounded-3xl text-lg text-white font-semibold cursor-pointer"
            onClick={() => navigate("/menu-list")}
          >
            Get Order
          </button>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-slate-500 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
