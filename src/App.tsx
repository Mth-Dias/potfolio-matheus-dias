import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./features/Footer";
import NavBar from "./features/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence } from "framer-motion";
import ExperiencesPage from "./pages/ExperiencesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();

  return (
    <div className="h-screen w-screen overflow-x-hidden flex justify-between flex-col select-none bg-white">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
