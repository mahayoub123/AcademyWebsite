import { createSlice } from "@reduxjs/toolkit";
import act1 from "../../assets/images/1.svg";
import act2 from "../../assets/images/2.svg";
import act3 from "../../assets/images/3.svg";
import act4 from "../../assets/images/4.svg";
import act5 from "../../assets/images/5.svg";
import act6 from "../../assets/images/6.svg";
export interface Activites {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Activites[] = [
  {
    id: 1,
    title: "Sports and Athletics",
    desc: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    image: act1,
  },
  {
    id: 2,
    title: "Art and Creativity",
    desc: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    image: act2,
  },
  {
    id: 3,
    title: "Music and Performing Arts",
    desc: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    image: act3,
  },
  {
    id: 4,
    title: "Language Clubs",
    desc: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    image: act4,
  },
  {
    id: 5,
    title: "Science Club",
    desc: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    image: act5,
  },
  {
    id: 6,
    title: "Cooking and Culinary Arts",
    desc: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    image: act6,
  },
];

const activitesSlice = createSlice({
  name: "act",
  initialState,
  reducers: {},
});

export default activitesSlice.reducer;
