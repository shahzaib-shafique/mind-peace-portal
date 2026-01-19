import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Tips from "./components/Tips";
import Dashboard from "./components/Dashboard";
import { AppContext } from "./context/appContext";

const App = () => {
  const appName = "MindNest";
  return (
    <>
      <AppContext.Provider value={{ appName }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
