import { configureStore } from "@reduxjs/toolkit";
import benifitsSlice from "../slices/benifitsSlice";
import testimonialSlice from "../slices/testimonialsSlice";
import faqSlice from "../slices/faqSlice";
import navigateSlice from "../slices/navigateSlice";
import visionSlice from "../slices/visionSlice";
export const store = configureStore({
  reducer: {
    ben: benifitsSlice,
    test: testimonialSlice,
    faq: faqSlice,
    nav: navigateSlice,
    vision: visionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
