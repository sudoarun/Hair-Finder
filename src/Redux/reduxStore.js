import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import ProfessionalSlice from "./Slices/ProfessionalSlice";
import saveShopDetails from "./Slices/shopdetail";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    professional: ProfessionalSlice,
    saveShopDetails: saveShopDetails,
  },
});

export default store;
