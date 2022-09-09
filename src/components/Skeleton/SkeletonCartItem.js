import "./Skeleton.css";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonCartItem = ({ theme = "light" }) => {
  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <div className="skeleton-cart-item">
        <SkeletonElement type="avatar" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonCartItem;
