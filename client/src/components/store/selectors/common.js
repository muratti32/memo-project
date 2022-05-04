import { createSelector } from "@reduxjs/toolkit";

export const common = {
  loading: createSelector(
    (state) => state.commonSlice.loading,
    (value) => value
  ),
};
