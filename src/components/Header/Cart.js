import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartDropdown from "./CartDropdown";
import { CartState } from "../Context/Context";

const Cart = () => {
  let [isOpen, setOpen] = useState(false);
  let {
    state: { cart },
    dispatch
  } = CartState();

  return (
    <div className="cart">
      <div className="cartIcon" onClick={() => setOpen((prev) => !prev)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="badge">{cart.length}</div>
      </div>

      {isOpen && (
        <CartDropdown
          cart={cart}
          dispatch={dispatch}
          closeCartDropdown={() => setOpen(false)}
        />
      )}
    </div>
  );
};
export default Cart;
