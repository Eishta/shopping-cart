import { useEffect, useState } from "react";
import { CartState } from "./Context/Context";
import { AiFillDelete } from "react-icons/ai";
import SkeletonCartItem from "./Skeleton/SkeletonCartItem";

const Cart = () => {
  let [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);
  let {
    state: { cart },
    dispatch
  } = CartState();

  let totalPrice = cart.reduce((acc, ele) => {
    return acc + ele.qty * Number(ele.price);
  }, 0);
  return (
    <div className="cart-page">
      <div className="cart-items">
        {!show && [1, 2, 3].map((ele) => <SkeletonCartItem key={ele} />)}
        {show &&
          cart.map((prod, index) => (
            <span className="cartItem">
              <img className="cartItemImg" alt={prod.name} src={prod.image} />
              {/* <div className="cartitemDetails"> */}
              <span>{prod.name}</span>
              <span>₹{prod.price.split(".")[0]}</span>
              {/* </div> */}
              <select
                value={prod.qty}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: {
                      id: prod.id,
                      qty: e.target.value
                    }
                  })
                }
              >
                {[1, 2, 3, 4, 5].map((ele, i) => (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
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
      </div>
      <div className="filters total">
        <h3>SubTotal ({cart.length}) items</h3>
        Price: {totalPrice}
        <button className="clear-filters">CheckOut </button>
      </div>
    </div>
  );
};
export default Cart;
