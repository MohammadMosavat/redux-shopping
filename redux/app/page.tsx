"use client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../src/redux/configerStore";
import Cart from "@/components/cart";
import Link from "next/dist/client/link";
import Header from "@/components/header";

export default function Home() {
  const array = [1, 2, 3];

  return (
    <Provider store={store}>
      <main className="flex  gap-14  mx-auto  flex-col ">
        <Header />
        <div className="flex mx-auto  gap-5 ">
          {array.map((items) => (
            <Cart id={items} />
          ))}
        </div>
      </main>
    </Provider>
  );
}
