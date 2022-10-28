import { useState } from "react";
import SkeletonImage from "../Skeleton/SkeletonImage";
// import LazyLoad from "react-lazyload";
const ProductImage = ({ alt, src, imgLoad }) => {
  let [loaded, setloaded] = useState("");
  let style = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  return (
    <div style={{ position: "relative" }}>
      {!loaded && <SkeletonImage style={style} />}
      {/* <LazyLoad> */}
        <img
          src={src}
          alt={alt}
          loading={imgLoad}
          // style={style}
          onLoad={() => setloaded(true)}
        />
      {/* </LazyLoad> */}
    </div>
  );
};

export default ProductImage;
