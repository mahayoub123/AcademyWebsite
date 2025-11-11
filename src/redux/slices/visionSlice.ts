import { createSlice } from "@reduxjs/toolkit";
import m1 from "../../assets/images/m1.svg";
import m2 from "../../assets/images/m2.svg";
export interface Vision {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Vision[] = [
  {
    id: 1,
    title: "Mission",
    desc: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    image: m1,
  },
  {
    id: 2,
    title: "Vision",
    desc: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    image: m2,
  },
];

const visionSlice = createSlice({
  name: "vision",
  initialState,
  reducers: {},
});

export default visionSlice.reducer;
