import { configureStore } from "@reduxjs/toolkit";
import benifitsSlice from "../slices/benifitsSlice";
import testimonialSlice from "../slices/testimonialsSlice";
import faqSlice from "../slices/faqSlice";
export const store = configureStore({
  reducer: {
    ben: benifitsSlice,
    test: testimonialSlice,
    faq: faqSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
