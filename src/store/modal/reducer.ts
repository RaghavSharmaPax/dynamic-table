import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataObject } from "../../utils/TableMaker";

const initialState: { title: string; data: DataObject; display: boolean } = {
  title: "",
  data: {},
  display: false,
};

const ModalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    loadData: (
      state,
      action: PayloadAction<{ data: DataObject; title: string }>
    ) => {
      state.data = action.payload.data;
      state.title = action.payload.title;
      state.display = true;
    },
    removeData: (state) => {
      state.data = {};
      state.display = false;
    },
  },
});

export const { loadData, removeData } = ModalReducer.actions;
export default ModalReducer.reducer;
