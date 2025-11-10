import { createSlice } from "@reduxjs/toolkit";
import test1 from "../../assets/images/Profile Container.svg";
import test2 from "../../assets/images/Profile Container2.svg";
import test3 from "../../assets/images/Profile Container3.svg";
export interface Test {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Test[] = [
  {
    id: 1,
    title: "Jennifer B",
    desc: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    image: test1,
  },
  {
    id: 2,
    title: "David K",
    desc: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    image: test2,
  },
  {
    id: 3,
    title: "Emily L",
    desc: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    image: test3,
  },
];

const testimonialsSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
