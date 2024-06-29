import { useNavigate } from "react-router-dom";
import { menuList } from "../utils/menu-list";

const MenuList = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center h-[100vh] w-full bg-yellow-200 relative">
      <div className="absolute top-2 left-2">
        <button onClick={() => navigate("/")}>Back</button>
      </div>
      <div className="container grid grid-cols-3 gap-x-8">
        {menuList.map((menu, i) => (
          <div
            className="w-full h-[80vh] flex flex-col items-center justify-center p-6"
            key={i}
          >
            <div className="w-[200px] h-[200px] bg-slate-500 rounded-full"></div>
            <div className="text-center w-full flex flex-col justify-center items-center">
              <h1 className="text-6xl font-semibold my-5">{menu.title}</h1>
              <div className="gap-3 flex flex-col mt-3">
                {menu.variant.map((variant, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-2xl font-semibold gap-x-12"
                  >
                    <p>{variant.name}</p>
                    <p>{variant.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="text-xl font-semibold px-12 py-3 rounded-3xl bg-green-500 text-white mt-10">
              Order
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuList;
