import {RxCross1} from "react-icons/rx";
import {useAppDispatch} from "../redux/Hooks.ts";
import {removeProduct} from "../redux/slice/CartSlice.tsx";
import React from "react";


interface propsType {
  id: number,
  img: string,
  title: string,
  price: number,
  quantity: number
}

const CartProducts: React.FC<propsType> = ({id, img, title, price, quantity}) => {
  const dispatch = useAppDispatch();
  const newPrice = Math.ceil(price * 0.9);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={img} alt="amirich react dev" className="h-[80px]" />
          <div className="space-y-2">
            <h2 className="font-medium">{title}</h2>
            <p className="text-gray-600 text-sm">{quantity} x {newPrice}</p>
          </div>
        </div>
        <RxCross1 onClick={() => dispatch(removeProduct(id))} className="cursor-pointer" />
      </div>
    </>
  );
};

export default CartProducts;