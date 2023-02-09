import { RouterProvider} from "react-router-dom";
import Footer from "./features/Footer";
import NavBar from "./features/NavBar";
import RouterHook from "./hooks/RouterHook";


function App() {
  
  const { router } = RouterHook()

  return (
    <div className="h-screen w-screen flex justify-between flex-col select-none">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
