import { createSlice } from "@reduxjs/toolkit";
import f1 from "../../assets/images/f1.svg";
import f2 from "../../assets/images/f2.svg";
import f3 from "../../assets/images/f3.svg";
import f4 from "../../assets/images/f4.svg";
import f5 from "../../assets/images/f5.svg";
import f6 from "../../assets/images/f6.svg";
export interface Features {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Features[] = [
  {
    id: 1,
    title: "Thematic Learning",
    desc: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    image: f1,
  },
  {
    id: 2,
    title: "STEAM Education",
    desc: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    image: f2,
  },
  {
    id: 3,
    title: "Language Immersion",
    desc: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    image: f3,
  },
  {
    id: 4,
    title: "Art and Creativity",
    desc: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    image: f4,
  },
  {
    id: 5,
    title: "Outdoor Education",
    desc: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    image: f5,
  },
  {
    id: 6,
    title: "Play-Based Learning",
    desc: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    image: f6,
  },
];

const featuresSlice = createSlice({
  name: "fet",
  initialState,
  reducers: {},
});

export default featuresSlice.reducer;
