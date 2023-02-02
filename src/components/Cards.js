import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../scss/Cards.scss";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  const [totalPoint, setTotal] = useState(0);

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setTotal(totalPoint + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };
  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };
  console.log(totalPoint);
  useEffect(() => {
    if (totalPoint === 8) {
      alert("Melike Seni Seviyorum <3 ");
      totalPoint = 0;
      window.location.reload(false);
    }
  }, totalPoint);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Ahmet Ünsal Hafıza Oyunu</h1>
      <div className="container">
        {items.map((item, index) => (
          <Card item={item} key={index} id={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
