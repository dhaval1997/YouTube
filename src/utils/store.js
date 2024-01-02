import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: { general: generalSlice, search: searchSlice, chat: chatSlice },
});

export default store;
