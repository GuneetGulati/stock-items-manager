import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    id:null,
    updateddata: null,
 
  },

  reducers: {
    setData: (state, action) => {
      state.updateddata = action.payload.data;
    },
    setId: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setData ,setId} = dataSlice.actions;

export const selectData = (state) => state.data.updateddata;
export const selectId = (state) => state.data.id;

export default dataSlice.reducer;

