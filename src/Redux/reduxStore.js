import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import ProfessionalSlice from "./Slices/ProfessionalSlice";
import saveShopDetails from "./Slices/shopdetail";
import AllShops from "./Slices/AllShops";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    professional: ProfessionalSlice,
    saveShopDetails: saveShopDetails,
    allshops: AllShops,
  },
});

export default store;
