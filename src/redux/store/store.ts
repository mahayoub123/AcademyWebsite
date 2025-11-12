import { configureStore } from "@reduxjs/toolkit";
import benifitsSlice from "../slices/benifitsSlice";
import testimonialSlice from "../slices/testimonialsSlice";
import faqSlice from "../slices/faqSlice";
import navigateSlice from "../slices/navigateSlice";
import visionSlice from "../slices/visionSlice";
import awardsSlice from "../slices/awardsSlice";
import teamSlice from "../slices/teamSlice";
import featuresSlice from "../slices/featuresSlice";
import learnSlice from "../slices/learnSlice";
export const store = configureStore({
  reducer: {
    ben: benifitsSlice,
    test: testimonialSlice,
    faq: faqSlice,
    nav: navigateSlice,
    vision: visionSlice,
    awards: awardsSlice,
    team: teamSlice,
    fet: featuresSlice,
    learn: learnSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
