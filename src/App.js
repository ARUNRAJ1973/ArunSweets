import React, { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gifting from './Gifting';
import Shop from './Shop';
import OurBrands from './OurBrands';
import Contact from './Contact';
import Template from './Template';
import Footer from './Footer';
import Login from './Login';
import Juice from './Juice';
import Signin from './Signin';
import Nuts from './Nuts';
import Sweets from './Sweets';
import Cakes from './Cakes';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Shop />} />
            <Route exact path="/Gifting" element={<Gifting />} />
            <Route exact path="/OurBrands" element={<OurBrands />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signin" element={<Signin />} />
            <Route exact path="/Juice" element={<Juice />} />
            <Route exact path="/Nuts" element={<Nuts />} />
            <Route exact path="/Sweets" element={<Sweets />} />
            <Route exact path="/Cakes" element={<Cakes />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
