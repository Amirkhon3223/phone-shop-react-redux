import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppDispatch } from "../redux/Hooks.ts";
import { addToCart } from "../redux/slice/CartSlice.tsx";
import toast from "react-hot-toast";

interface propsType {
  id: number,
  title: string,
  img: string,
  category: string,
  price: string
}

const ProductCart = ({ id, title, img, category, price }: propsType) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id, img, title, price: parseFloat(price), quantity: 1
    }
    dispatch(addToCart(payload));
    toast.success("Added to cart");
  }

  return (
    <div className="border border-gray-200 h-full flex flex-col">
      <div className="text-center border-b border-gray-200 p-1">
        <img
          src={img}
          className="inline-block w-full h-80 object-contain"
          alt="amirich developer"
        />
      </div>
      <div className="px-2 flex-grow">
        <div className="pt-3 pb-2 flex items-center justify-between text-yellow-500 w-full">
          <div className="flex item-center">
            <div className="flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-gray-600 text-sm ml-2">(3 Review)</p>
          </div>
          <div>
            <h2 className="font-semibold text-sky-500 text-xl">${price}</h2>
          </div>
        </div>
        <div className="flex justify-between items-center pb-3">
          <p className="text-gray-500 text-sm font-semibold">{category}</p>
          <h2 className="font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <button
          onClick={addProductToCart}
          className="flex justify-center gap-x-3 font-medium items-center bg-sky-500
                     text-white px-4 py-2 cursor-pointer hover:bg-sky-600 w-[90%]
                     transition-all duration-200 rounded-lg hover:scale-105"
        >
          <AiOutlineShoppingCart className="text-2xl" /> <span>Добавить в карзину</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
