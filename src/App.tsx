import { BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Footer from "./features/Footer";
import NavBar from "./features/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex justify-between flex-col select-none">
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
