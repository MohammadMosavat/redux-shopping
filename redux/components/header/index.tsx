import { useSelector } from "react-redux";

const Header = () => {
  const { cartProduct } = useSelector((state: any) => state.cart);
  console.log(cartProduct);
  return (
    <header className="flex p-4 px-8 w-full  items-center">
      <div className="flex w-full  flex-grow items-center gap-4">
        <picture className="inline-block ">
          <img src="/icons8-logo.svg" alt="" />
        </picture>
        <ul className="flex px-4 border-l-2 border-zinc-200  items-center gap-4">
          <li className="text-lg text-zinc-500 cursor-pointer hover:text-zinc-950">
            Home
          </li>
          <li className="text-lg text-zinc-500 cursor-pointer hover:text-zinc-950">
            Cato
          </li>
          <li className="text-lg text-zinc-500 cursor-pointer hover:text-zinc-950">
            Contact Us
          </li>
          <li className="text-lg text-zinc-500 cursor-pointer hover:text-zinc-950">
            About Us
          </li>
        </ul>
      </div>
      <picture className="inline-block relative  w-8 h-8">
        <img className="w-full h-full" src="/bag-icon.svg" alt="" />
        <p className="text-xs top-0 right-[-4px] w-fit absolute p-0.5 px-1.5 text-center text-white bg-zinc-800 rounded-full">
          {cartProduct.length > 0 ? cartProduct.length : 0}
        </p>
      </picture>
    </header>
  );
};

export default Header;
