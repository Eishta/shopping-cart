import Checkbox from "./Checkbox";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

const Filters = () => {
  let {
    filterState: { byPrice, byFastDelivery, byRating, byStock },
    filterDispatch
  } = CartState();
  // console.log(byPrice, byFastDelivery, byRating, byStock);
  return (
    <div className="filters">
      <span>
        <h3>Filter Products</h3>
      </span>
      <span>
        <input
          type="radio"
          name="price"
          value="ascending"
          id="asc-price"
          onChange={() =>
            filterDispatch({ type: "BY_PRICE", payload: "lowToHigh" })
          }
        />
        <label htmlFor="asc-price">Ascending</label>
      </span>
      <span>
        <input
          type="radio"
          name="price"
          value="descending"
          id="des-price"
          onChange={() =>
            filterDispatch({ type: "BY_PRICE", payload: "highToLow" })
          }
        />
        <label htmlFor="des-price">Descending</label>
      </span>
      <span>
        <Checkbox
          label="Out of Stock"
          checked={byStock}
          onChange={() => filterDispatch({ type: "BY_STOCK" })}
          name="OOS"
        />
      </span>
      <span>
        <Checkbox
          label="Fast Delivery Only"
          checked={byFastDelivery}
          onChange={() => filterDispatch({ type: "BY_FAST_DELIVERY" })}
          name="fast-delivery"
        />
      </span>
      <span>
        <label htmlFor="rating">
          Rating:
          <Rating
            id="rating"
            rating={byRating}
            onClick={(i) =>
              filterDispatch({ type: "BY_RATING", payload: i + 1 })
            }
          />
        </label>
      </span>
      <button
        className="clear-filters"
        onClick={(i) => filterDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </button>
    </div>
  );
};
export default Filters;
