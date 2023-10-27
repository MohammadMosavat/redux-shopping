import cartSlice from "@/src/redux/counter";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Cart = (props: {
  id: number,
  img: string,
  title: string,
  price: number,
}) => {
  const { cartProduct } = useSelector((state : any) => state.cart);

  const { addToCart } = cartSlice.actions;

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-50">
      <picture className="inline-block rounded-sm overflow-hidden">
        <img src={props.img} alt="" />
      </picture>
      <section className="flex flex-col gap-3 justify-center">
        <h1>{props.title}</h1>
        <p>${props.price}</p>

        <button
          onClick={() => {
            console.log(cartProduct , props.id)
            if (!cartProduct.includes(props.id)) {
              dispatch(addToCart(props.id));
            }
          }}
          className="w-full rounded-lg p-2 bg-blue-500"
        >
          Add To Cart
        </button>
      </section>
    </div>
  );
};

export default Cart;
