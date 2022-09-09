import "./Skeleton.css";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonImage = ({ theme = "light" }) => {
  return (
    <div className={`skeleton-wrapper ${theme}`}>
      <SkeletonElement type="thumbnail" />
      <Shimmer />
    </div>
  );
};

export default SkeletonImage;
