"use client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../src/redux/configerStore";
import Cart from "@/components/cartProduct";
import Link from "next/dist/client/link";
import Header from "@/components/header";
import { DataProduct } from "../data/index";
export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex  gap-14  mx-auto  flex-col ">
        <Header />
        <div className="flex mx-auto  gap-5 ">
          {DataProduct.map((items) => (
            <Cart
              id={items.id}
              img={items.img}
              title={items.cato}
              price={items.price}
            />
          ))}
        </div>
      </main>
    </Provider>
  );
}
