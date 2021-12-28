import React from "react";
import { useDispatch } from "react-redux";
import { addcustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 } from "uuid";

interface ReservationType {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationType) => {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
          dispatch(removeReservation(index));
          dispatch(addcustomer({
              id: v4(),
              name: name,
              food:[]
          }))
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
