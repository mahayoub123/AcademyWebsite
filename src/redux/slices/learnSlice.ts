import { createSlice } from "@reduxjs/toolkit";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
export interface Learn {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Learn[] = [
  {
    id: 1,
    title: "Language Arts",
    desc: "Reading, writing, storytelling, and communication skills.",
    image: p1,
  },
  {
    id: 2,
    title: "Mathematics",
    desc: "Number sense, basic operations, problem-solving, and logic.",
    image: p2,
  },
  {
    id: 3,
    title: "Science",
    desc: "Exploring the natural world through hands-on experiments and investigations.",
    image: p3,
  },
  {
    id: 4,
    title: "Social Studies",
    desc: "Cultivating an understanding of diverse cultures and communities.",
    image: p4,
  },
  {
    id: 5,
    title: "Arts and Crafts",
    desc: "Encouraging creativity through various art forms and crafts.",
    image: p5,
  },
  {
    id: 6,
    title: "Physical Education",
    desc: "Promoting physical fitness, coordination, and teamwork.",
    image: p6,
  },
];

const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {},
});

export default learnSlice.reducer;
