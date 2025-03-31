import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FipeState {
  selectedBrand: string | null;
  selectedModel: string | null;
  selectedYear: string | null;
}

const initialState: FipeState = {
  selectedBrand: null,
  selectedModel: null,
  selectedYear: null,
};

const fipeSlice = createSlice({
  name: "fipe",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string | null>) => {
      state.selectedBrand = action.payload;
      state.selectedModel = null;
      state.selectedYear = null;
    },
    setModel: (state, action: PayloadAction<string | null>) => {
      state.selectedModel = action.payload;
      state.selectedYear = null;
    },
    setYear: (state, action: PayloadAction<string | null>) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { setBrand, setModel, setYear } = fipeSlice.actions;
export default fipeSlice.reducer;
