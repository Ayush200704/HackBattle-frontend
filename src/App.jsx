import React from "react";
import Nav from "./components/Nav";
import HorizontalScroll from "./components/HorizontalScroll";
import DivSlider from "./components/DivSlider";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <div className="ml-[80px]" >
      <HorizontalScroll />
      <DivSlider />
      <Footer />
      </div>
    </>
  );
}

export default App;
