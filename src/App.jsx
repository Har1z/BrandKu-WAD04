import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { featureData } from "./data/features.js"

const App = () => {
  const [features, setFeatures] = useState(featureData)
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home features={featureData} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
};

export default App;
