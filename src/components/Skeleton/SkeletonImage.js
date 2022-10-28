import "./Skeleton.css";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonImage = ({ theme = "light", style }) => {
  return (
    <div className={`skeleton-wrapper ${theme}`} style={style}>
      {/* <SkeletonElement type="thumbnail" /> */}
      <Shimmer />
    </div>
  );
};

export default SkeletonImage;
