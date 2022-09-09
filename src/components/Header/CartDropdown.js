import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartDropdown = ({ cart, dispatch, closeCartDropdown }) => {
  return (
    <div className="cart-drop">
      {cart.length > 0 ? (
        <>
          {cart.map((prod, i) => (
            <span className="cartItem">
              <img className="cartItemImg" alt={prod.name} src={prod.image} />
              <div className="cartitemDetails">
                <span>{prod.name}</span>
                <span>₹{prod.price.split(".")[0]}</span>
              </div>
              <AiFillDelete
                fontSize="20px"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id: prod.id }
                  })
                }
              />
            </span>
          ))}
        </>
      ) : (
        "Cart is Empty"
      )}{" "}
      {cart.length > 0 && (
        <Link to="/cart" onClick={closeCartDropdown}>
          <button
            style={{ width: "95%", margin: "0 10px" }}
            className="productBtn"
          >
            Go to Cart
          </button>
        </Link>
      )}
    </div>
  );
};
export default CartDropdown;
