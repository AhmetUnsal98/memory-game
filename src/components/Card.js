import React from "react";
import "../scss/Card.scss";
const Card = ({ item, handleClick, id }) => {
  const itemStat = item.stat ? " active " + item.stat : "";

  return (
    <div
      className={"card-container" + itemStat}
      onClick={() => handleClick(id)}
    >
      <img src={item.img}></img>
    </div>
  );
};

export default Card;
