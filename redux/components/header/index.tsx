import { useSelector } from "react-redux";

const Header = () => {
  const { cartProduct } = useSelector((state: any) => state.cart);
  console.log(cartProduct);
  return (
    <header className="flex p-4 px-8 w-full  items-center">
      <div className="flex w-full  flex-grow items-center gap-4">
        <h1>Logo</h1>
        <ul className="flex px-4 border-l-2 border-zinc-200  items-center gap-4">
          <li>Home</li>
          <li>Cato</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
     {cartProduct.length > 0 && <span>{cartProduct.length}</span>}
    </header>
  );
};

export default Header;
