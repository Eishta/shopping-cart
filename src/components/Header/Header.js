import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="dark header">
      <Logo />
      <Search />
      <Cart />
    </header>
  );
};

export default Header;
