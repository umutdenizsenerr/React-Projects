import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

import "../../components/List/List.css";
import List from "../../components/List/List";
interface ICartPageProps {
  groceryCartList: any;
  setGroceryCartList: Dispatch<SetStateAction<any[]>>;
}
const CartPage: FunctionComponent<ICartPageProps> = ({
  groceryCartList,
  setGroceryCartList,
}) => {
  const handleRemove = (event) => {
    event.preventDefault();
    let index = event.currentTarget.value;
    let temp = [...groceryCartList];
    if (temp[index].amount > 1) {
      temp[index].amount -= 1;
    } else {
      temp.splice(index, 1);
    }
    setGroceryCartList([...temp]);
    return null;
  };

  const handleAdd = (event) => {
    event.preventDefault();
    let index = event.currentTarget.value;
    let temp = [...groceryCartList];
    temp[index].amount += 1;
    setGroceryCartList([...temp]);
    return null;
  };
  return (
    <List
      data={groceryCartList}
      handleRemove={handleRemove}
      cardType="cartCase"
      handleAdd={handleAdd}
    />
  );
};

export default CartPage;
