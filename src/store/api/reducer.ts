import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataObject } from "../../utils/TableMaker";
import { getData } from "./actions";

const initialState: { data: DataObject[]; loading: boolean; error: string } = {
  data: [],
  loading: false,
  error: "",
};

const ApiReducer = createSlice({
  name: "api",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(
        getData.fulfilled,
        (state, action: PayloadAction<DataObject[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      );
  },
});

export default ApiReducer.reducer;
