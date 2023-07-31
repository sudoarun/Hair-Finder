import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import saveShopDetails from "./Slices/shopdetail";
import AllShops from "./Slices/AllShops";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    saveShopDetails: saveShopDetails,
    allshops: AllShops,
  },
});

export default store;
