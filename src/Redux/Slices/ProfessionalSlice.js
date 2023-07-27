import { createSlice } from "@reduxjs/toolkit";
const ProfessionalSlice = createSlice({
  name: "professionalState",
  initialState: [],
  reducers: {
    addState: (state, action) => {
      state.push(action.payload);
    },
    deleteState: (state, action) => {
      state.pop(action.payload);
    },
  },
});
export const addProfessionaDB = ProfessionalSlice.actions;
export default ProfessionalSlice.reducer;
