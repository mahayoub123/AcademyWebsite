import { createSlice } from "@reduxjs/toolkit";
import sup1 from "../../assets/images/sup1.svg";
import sup2 from "../../assets/images/sup2.svg";
import sup3 from "../../assets/images/sup3.svg";
export interface Support {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Support[] = [
  {
    id: 1,
    title: "Counseling",
    desc: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    image: sup1,
  },
  {
    id: 2,
    title: "Learning Support",
    desc: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    image: sup2,
  },
  {
    id: 3,
    title: "Parent-Teacher Collaboration",
    desc: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    image: sup3,
  },
];

const supSlice = createSlice({
  name: "sup",
  initialState,
  reducers: {},
});

export default supSlice.reducer;
