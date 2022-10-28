import { useEffect, useState } from "react";
import Filters from "./SideFilters/Filters";
import { CartState } from "./Context/Context";
import SingleProduct from "./Products/SingleProduct";
import SkeletonProduct from "./Skeleton/SkeletonProduct";

const Home = () => {
  let [show, setshow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshow(true);
    }, 5000);
  }, []);
  const {
    state: { products },
    filterState: { byPrice, byFastDelivery, byRating, byStock }
  } = CartState();

  let transformProducts = () => {
    let sortedProducts = products;
    if (byPrice) {
      sortedProducts.sort((a, b) => {
        return byPrice === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }
    if (byFastDelivery) {
      console.log(byFastDelivery);
      sortedProducts = sortedProducts.filter((ele) => {
        console.log(ele.fastDelivery);
        return ele.fastDelivery;
      });
    }
    if (byRating) {
      console.log(sortedProducts);
      sortedProducts = sortedProducts.filter((ele) => {
        return ele.ratings >= byRating;
      });
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((ele) => {
        return ele.inStock;
      });
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="products-container">
        {show &&
          transformProducts().map((ele, index) => (
            <SingleProduct product={ele} key={index} />
          ))}
        {!show &&
          [1, 2, 3, 4, 5, 6].map((ele) => <SkeletonProduct key={ele} />)}
      </div>
    </div>
  );
};

export default Home;
