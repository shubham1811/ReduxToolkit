import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

interface customerPropsType {
  name: string;
  id: string;
  food: string[];
}

const CustomerCard = ({ name, id, food }: customerPropsType) => {
  const dispatch = useDispatch();
  const [customerfood, setCustomerFood] = useState("");
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerfood}
            onChange={(e) => {
              setCustomerFood(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(
                addFood({
                  food: customerfood,
                  id,
                })
              );
              setCustomerFood("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
