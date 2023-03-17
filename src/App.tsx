import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./features/Footer";
import NavBar from "./features/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence, motion } from "framer-motion";
import ExperiencesPage from "./pages/ExperiencesPage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";

function App() {
  const location = useLocation();

  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    message: string;
  }>({
    email: "",
    name: "",
    message: "",
  });

  const handlePartial = (partial: Partial<typeof formData>) => {
    setFormData({ ...formData, ...partial });
  };

  const handleSubmit = () => {
    const data = new FormData();

    data.append("Email", formData.email);
    data.append("Name", formData.name);
    data.append("Message", formData.message);

    fetch(
      "https://script.google.com/macros/s/AKfycbxlsLddLS0Qf70wLumWwwh8IhpKxetUIjvNm20-3hi4Tv3lepcmE3fKAo5vKOHjnCn0kw/exec",
      {
        method: "POST",
        body: data,
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden flex justify-between flex-col select-none bg-white">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="teste"
            element={
              <div className="w-full h-full flex justify-center items-center">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit()
                  }}
                  className="flex flex-col gap-y-3 justify-center items-center"
                >
                  <input className="border rounded-lg"
                    onChange={(e) => {
                      handlePartial({ email: e.target.value });
                    }}
                    type="email"
                    placeholder="email"
                  />
                  <input className="border rounded-lg"
                    onChange={(e) => {
                      handlePartial({ name: e.target.value });
                    }}
                    type="text"
                    placeholder="nome"
                  />
                  <input className="border rounded-lg"
                    onChange={(e) => {
                      handlePartial({ message: e.target.value });
                    }}
                    type="text"
                    placeholder="mensagem"
                  />
                  <input className="border rounded-lg" type="submit" value="Enviar" />
                </form>
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
