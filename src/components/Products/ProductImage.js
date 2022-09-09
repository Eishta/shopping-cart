import { useState } from "react";
import SkeletonImage from "../Skeleton/SkeletonImage";

const ProductImage = ({ alt, src }) => {
  let [loaded, setloaded] = useState("");
  return (
    <>
      {!loaded && <SkeletonImage />}
      <img src={src} alt={alt} loading="eager" onLoad={() => setloaded(true)} />
    </>
  );
};

export default ProductImage;
