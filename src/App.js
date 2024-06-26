import MenuBar from "./Components/MenuBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import SingleService from "./Pages/SingleService/SingleService";
import PageNotFound from "./Pages/Pnf/PageNotFound";
import Quotation from "./Pages/Quote/Quotation";
import Partnership from "./Pages/Partnership/Partnership";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="App">
      <HashRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/service/:id" element={<SingleService />} />
          <Route path="/quote" element={<Quotation />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
