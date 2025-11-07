import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContacPage from "./pages/ContacPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionPage from "./pages/AdmissionPage";
import StudentPage from "./pages/StudentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContacPage />,
  },
  {
    path: "/acad",
    element: <AcademicsPage />,
  },
  {
    path: "/adm",
    element: <AdmissionPage />,
  },
  {
    path: "/student",
    element: <StudentPage />,
  },
]);
