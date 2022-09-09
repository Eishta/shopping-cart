import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating = 0, onClick = () => {} }) => {
  return (
    <div>
      {[...Array(5)].map((ele, i) => (
        <span key={i} onClick={() => onClick(i)} style={{ cursor: "pointer" }}>
          {" "}
          {i + 1 > rating ? <AiOutlineStar /> : <AiFillStar />}{" "}
        </span>
      ))}
    </div>
  );
};
export default Rating;
