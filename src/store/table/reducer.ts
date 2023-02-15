import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Param, DataObject } from "../../utils/TableMaker";

const initialState: {
  attributes: string[];
  selectedAttributes: Param[];
  loading: boolean;
  error: string;
} = {
  attributes: [],
  selectedAttributes: [],
  loading: false,
  error: "",
};

const TableReducer = createSlice({
  name: "table",
  initialState: initialState,
  reducers: {
    initializeAttributes(state, action: PayloadAction<DataObject[]>) {
      // storing the property keys for the api data item
      const product = action.payload[0];
      const attrs = [];
      for (const key in product) {
        attrs.push(key);
      }
      state.attributes = attrs;
    },
    addSelectedAttribute(state, action) {
      state.selectedAttributes.push({ attr: action.payload, title: "" });
    },
    removeSelectedAttribute(state, action) {
      const index = state.selectedAttributes.findIndex(
        (attr) => action.payload === attr.attr
      );
      state.selectedAttributes.splice(index, 1);
    },
    updateAttrTitle(
      state,
      action: PayloadAction<{ index: number; title: string }>
    ) {
      const { index, title } = action.payload;
      state.selectedAttributes[index].title = title;
    },
  },
});

export const {
  initializeAttributes,
  addSelectedAttribute,
  removeSelectedAttribute,
  updateAttrTitle,
} = TableReducer.actions;
export default TableReducer.reducer;
