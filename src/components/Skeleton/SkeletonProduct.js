import "./Skeleton.css";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonProduct = ({ theme = "light" }) => {
  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <div className="skeleton-product">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProduct;
