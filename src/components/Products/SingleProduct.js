import Rating from "../SideFilters/Rating";
import { CartState } from "../Context/Context.js";
import ProductImage from "./ProductImage";

const SingleProduct = ({ product }) => {
  let {
    state: { cart },
    dispatch
  } = CartState();

  return (
    <div className="product">
      <ProductImage src={product.image} alt={product.name} />
      <div className="product-body">
        <h5 className="title">{product.name}</h5>
        <p className="subtitle">
          <span>{product.price}</span>
          {product.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>4 Days delivery</div>
          )}
        </p>

        <Rating rating={product.ratings} />
        {cart.some((p) => p.id === product.id) ? (
          <button
            className="productBtn danger"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
            }
          >
            {" "}
            Remove from Cart
          </button>
        ) : (
          <button
            disabled={product.inStock === 0}
            className="productBtn"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            {product.inStock !== 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
