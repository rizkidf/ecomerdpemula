import { useNavigate, useParams } from "react-router-dom";
import { menuList } from "../utils/menu-list";
import { useEffect, useState } from "react";
import ModalOrder from "../component/modal-order";

const Order = () => {
  const { menu_id } = useParams();
  const [filteredMenu, setFilteredMenu] = useState();
  const [selectedVariantPrice, setSelectedVariantPrice] = useState();
  const [count, setCount] = useState();
  const [isShowModalOrder, setIsShowModalOrder] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let filter = menuList.filter((item) => item.id.toString() === menu_id);
    setFilteredMenu(filter[0]);
  }, [menu_id]);

  function handleOrderSubmit(e) {
    e.preventDefault();
    setIsShowModalOrder(true);
  }

  return (
    <section className="flex justify-center h-[100vh] relative">
      <div className="absolute top-2 left-2">
        <button onClick={() => navigate("/menu-list")}>Back</button>
      </div>
      <div className="container grid grid-cols-2 justify-center items-center">
        <div className="w-[500px] h-[500px] bg-slate-500 rounded-full"></div>
        <div>
          <h1 className="text-6xl font-semibold mb-16">
            {filteredMenu?.title}
          </h1>
          <form className="flex flex-col gap-5" onSubmit={handleOrderSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl ">
                Variant
              </label>
              <select
                name="variant"
                id="variant"
                className="p-4 border rounded-xl border-black relative"
                onChange={(e) => {
                  setSelectedVariantPrice(e.target.value);
                }}
              >
                {filteredMenu?.variant.map((variant, i) => (
                  <option value={variant.price} key={i}>
                    {variant.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Jumlah Pesanan
              </label>
              <input
                type="number"
                className="p-4 border rounded-xl border-black"
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
            <div>Total : Rp. {selectedVariantPrice * count || 0}</div>
            <div className="w-full mt-10">
              <button
                type="submit"
                className="py-4 px-16 border rounded-xl bg-green-500 text-lg font-semibold text-white w-full"
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <ModalOrder isShow={isShowModalOrder} setIsShow={(e)=>{setIsShowModalOrder(e)}}/>
    </section>
  );
};

export default Order;
