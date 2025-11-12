import { createSlice } from "@reduxjs/toolkit";
import aw1 from "../../assets/images/aw1.svg";
import aw2 from "../../assets/images/aw2.svg";
import aw3 from "../../assets/images/aw3.svg";
export interface Awards {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Awards[] = [
  {
    id: 1,
    title: "Outstanding Early Childhood Education Awar",
    desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    image: aw1,
  },
  {
    id: 2,
    title: "Innovative STEAM Education Award",
    desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    image: aw2,
  },
  {
    id: 3,
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    image: aw3,
  },
];

const awardsSlice = createSlice({
  name: "awards",
  initialState,
  reducers: {},
});

export default awardsSlice.reducer;
