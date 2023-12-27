import {AiOutlineUser} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {useAppSelector} from "../../redux/Hooks.ts";

export const Navbar = ({setOpenCart}: any) => {
  const count = useAppSelector((store) => store.cart.length)

  return (
    <>
      <div className="pt-5 px-7 bg-white top-0 sticky">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">PhoneShop :)</h1>
          <div className="flex gap-6 md:gap-8 items-center">
            <div className="md:flex items-center gap-3">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-3xl
                                w-12 h-12 flexitems-center flex justify-center items-center
                                cursor-pointer hover:bg-gray-200 transition-all duration-200"
              >
                <AiOutlineUser />
              </div>
              <div className="md:flex items-center gap-3 hidden">
                <a href="" className="text-gray-500">Войти</a>
              </div>
            </div>
            <div onClick={() => setOpenCart(true)} className="text-gray-500 text-3xl relative cursor-pointer">
              <FiShoppingCart />
              <div className="absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full
                                text-white text-sm flex items-center justify-center"
              >{count}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border0gray-200 pt-4"></div>
      </div>
    </>
  );
};