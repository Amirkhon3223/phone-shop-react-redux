import { useAppSelector } from "../redux/Hooks.ts";
import { RxCross1 } from "react-icons/rx";
import CartProducts from "./CartProducts.tsx";

const Cart = ({ setOpenCart }: any) => {
  const products = useAppSelector((store) => store.cart);
  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total = total + Math.ceil(item.price * 0.9) * item.quantity));
    return total;
  }

  return (
    <>
      <div
        onClick={() => setOpenCart(false)}
        className="fixed left-0 top-0 z-10 overflow-y-scroll bg-[#0000007d] w-full min-h-screen"
      ></div>
      <div className="fixed right-0 top-0 p-4 lg:w-[400px] md:w-[450px] w-full z-20 h-fit bg-white overflow-y-auto">
        <RxCross1
          onClick={() => setOpenCart(false)}
          className="absolute right-0 top-0 m-6 text-2xl cursor-pointer"
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600">
          Ваша карзина
        </h3>
        <div className="space-y-2 py-3">
          {products?.map((item: any) => (
            <CartProducts
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-3">
          <p>Всего: </p>
          <p>{getTotal()}.00 сомони</p>
        </div>
        <div className="space-y-4 mt-2">
          <button className="bg-sky-500 text-white text-center font-semibold w-full rounded-md py-3 hover:bg-sky-600">
            Посмотреть карзину
          </button>
          <button className="bg-sky-500 text-white text-center font-semibold w-full rounded-md py-3 hover:bg-sky-600">
            Проверить товар
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
