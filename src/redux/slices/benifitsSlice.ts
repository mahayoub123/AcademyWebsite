import { createSlice } from "@reduxjs/toolkit";
import ben1 from "../../assets/images/benfits1.svg";
import ben2 from "../../assets/images/benfits2.svg";
import ben3 from "../../assets/images/benfits3.svg";
import ben4 from "../../assets/images/benfits4.svg";
import ben5 from "../../assets/images/benfits5.svg";
import ben6 from "../../assets/images/benfits6.svg";
export interface Benfits {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Benfits[] = [
  {
    id: 1,
    title: "Holistic Learning Approach",
    desc: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    image: ben1,
  },
  {
    id: 2,
    title: "Experienced Educators",
    desc: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    image: ben2,
  },
  {
    id: 3,
    title: "Nurturing Environment",
    desc: "We prioritize safety and provide a warm and caring atmosphere for every child.",
    image: ben3,
  },
  {
    id: 4,
    title: "Play-Based Learning",
    desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    image: ben4,
  },
  {
    id: 5,
    title: "Individualized Attention",
    desc: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    image: ben5,
  },
  {
    id: 6,
    title: "Parent Involvement",
    desc: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    image: ben6,
  },
];

const benifitsSlice = createSlice({
  name: "ben",
  initialState,
  reducers: {},
});

export default benifitsSlice.reducer;
