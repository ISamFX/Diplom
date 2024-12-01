import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { SNEAKERS_URL } from "../../constants/constdev";

export type SneakMember = {
  id: number;
  vendorСode: string; 
  inStock: number;
  title: string;
  description:string; 
  imgUrl: string;
  stars: number;
  sizes: string[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
};

type FilterData = {
  minPrice: number;
  maxPrice: number;
  gender: string;
  sizes: string[];
};

type SneakState = {
  allData: SneakMember[];
  data: SneakMember[];
  loading: "pending" | "fulfilled" | "rejected" | "idle";
  totalPages: number;
  currentPage: number;
};

const initialSneakState: SneakState = {
  allData: [],
  data: [],
  loading: "idle",
  totalPages: 0,
  currentPage: 1,
};

export const fetchSneak = createAsyncThunk<SneakMember[]>("sneak/fetchSneak", async () => {
      const { data } = await axios.get<SneakMember[]>(`${SNEAKERS_URL}`);
      return data;
    });

export const sneakSlice = createSlice({
  name: "sneak",
  initialState: initialSneakState,
  reducers: {
    loadMore(state) {
      const start = state.currentPage * 9;
      const end = start + 9;
      state.data = state.allData.slice(0, end);
      state.currentPage += 1;
    },
    resetData(state) {
      state.allData = [];
      state.data = [];
      state.currentPage = 1;
      state.totalPages = 0;
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneak.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSneak.fulfilled, (state, action: PayloadAction<SneakMember[]>) => {
      state.loading = "fulfilled";
      state.allData = action.payload;
      state.data = action.payload.slice(0, 9);
      state.totalPages = Math.ceil(action.payload.length / 9);
    });
    builder.addCase(fetchSneak.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const { loadMore, resetData } = sneakSlice.actions;

export default sneakSlice.reducer;
