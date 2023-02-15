import { createAsyncThunk } from "@reduxjs/toolkit";

const getData = createAsyncThunk(
  "table/get",
  async (api: string, { rejectWithValue }) => {
    const res = await fetch(api);

    // if data was not fetched reject the promise
    if (!res.ok) return rejectWithValue("Couldn't fetch data.");

    const resData = await res.json();
    return resData[Object.keys(resData)[0]];
  }
);

export { getData };
  