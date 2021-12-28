import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ReservationCard from "./app/Component/ReservationCard";
import { addReservation } from "./app/features/reservationSlice";
import { Rootstate } from "./app/Store/store";
import CustomerCard from "./app/Component/CustomerCard";

function App() {
  const reservations = useSelector(
    (state: Rootstate) => state.reservations.value
  );
  const customers = useSelector((state: Rootstate) => state.customer.value);
  const [reservationName, setReservationName] = useState("");
  const dispatch = useDispatch();
  const handleAddReservation = () => {
    dispatch(addReservation(reservationName));
    setReservationName("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name: string, index: number) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                name={customer.name}
                food={customer.food}
                id={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
