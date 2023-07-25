import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import ProfessionalSlice from "./Slices/ProfessionalSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    professional: ProfessionalSlice,
  },
});

export default store;
