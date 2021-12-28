import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customerstate {
  value: Customer[];
}
interface Customer {
  name: string;
  id: string;
  food: string[];
}

interface AddFoodType {
  food: string;
  id: string;
}

const initialState: customerstate = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addcustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFoodType>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addcustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;
