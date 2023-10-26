import cartSlice from "@/src/redux/counter";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Cart = (props: { id: any }) => {
  const { cartProduct } = useSelector((state) => state.cart);
 
  const { addToCart, removeFromCart } = cartSlice.actions;
  React.useEffect(() => {
    console.log(cartProduct);
  }, [cartProduct]);
  
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 p-2 rounded-xl bg-gray-400">
      <picture>
        <img src="" alt="" />
      </picture>
      <section className="flex flex-col gap-3 justify-center">
        <h1>Title</h1>
        <p>Description</p>
        <p>Price</p>
        {!cartProduct.includes(props.id) ? (
          <button
            onClick={() => dispatch(addToCart(props.id))}
            className="w-full rounded-lg p-2 bg-slate-400"
          >
            Add To Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeFromCart(props.id))}
            className="w-full rounded-lg p-2 bg-slate-400"
          >
            remove from cart
          </button>
        )}
      </section>
    </div>
  );
};

export default Cart;
