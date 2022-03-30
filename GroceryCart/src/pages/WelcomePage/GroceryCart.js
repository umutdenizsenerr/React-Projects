import React, { useState } from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const GroceryCart = (props) => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <Header items={items} setItems={props.setItems} />
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default GroceryCart;
