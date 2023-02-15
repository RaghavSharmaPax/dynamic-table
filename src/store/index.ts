import { configureStore } from "@reduxjs/toolkit";
import TableReducer from "./table/reducer";
import ModalReducer from "./modal/reducer";
import ApiReducer from "./api/reducer";

const store = configureStore({
  reducer: {
    table: TableReducer,
    modal: ModalReducer,
    api: ApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
