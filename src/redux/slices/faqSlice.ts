import { createSlice } from "@reduxjs/toolkit";

export interface FAQ {
  id: number;
  title: string;
  desc: string;
}

const initialState: FAQ[] = [
  {
    id: 1,
    title: "What are the school hours at Little Learners Academy?",
    desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    title: "What documents do I need to provide to apply for a loan?",
    desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 3,
    title: "How can I access my acount online?",
    desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up. ",
  },
  {
    id: 4,
    title: "Are my transcription and personal information sequre",
    desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
];

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
});

export default faqSlice.reducer;
