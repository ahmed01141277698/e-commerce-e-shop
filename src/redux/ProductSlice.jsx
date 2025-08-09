import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      // يعني لما تبعت اكشن فيها بيانات منتجات الدالة دي هتحطها جة state.products
      state.products = action.payload;
    },
  },
});

// هنا عملت تصدير للستبرودكتس عشان اقدر استخدمها في اي حته في المشروع والاكشن هي اللي هتعمل كدا
export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
