// stylsheet
import { BrowserRouter } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}

export default App;
