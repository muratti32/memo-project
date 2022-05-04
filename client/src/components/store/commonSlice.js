import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: null,
  warning: null,
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setWarning: (state, action) => {
      state.warning = action.payload;
    },
  },
});

export const { setLoading, setError, setSuccess, setWarning } = commonSlice.actions;

export default commonSlice.reducer;
