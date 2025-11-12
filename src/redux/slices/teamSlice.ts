import { createSlice } from "@reduxjs/toolkit";
import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t5.png";
import t6 from "../../assets/images/t6.png";
export interface Team {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Team[] = [
  {
    id: 1,
    title: "Ms. Sarah Anderson",
    desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    image: t1,
  },
  {
    id: 2,
    title: "Mr. David Roberts",
    desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    image: t2,
  },
  {
    id: 3,
    title: "Ms. Emily Hernandez",
    desc: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    image: t3,
  },
  {
    id: 4,
    title: "Mr. Michael Turner",
    desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    image: t4,
  },
  {
    id: 5,
    title: "Ms. Jessica Lee",
    desc: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    image: t5,
  },
  {
    id: 6,
    title: "Mr. William Parker",
    desc: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    image: t6,
  },
];

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

export default teamSlice.reducer;
