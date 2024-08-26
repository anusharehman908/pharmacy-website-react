
 import {  BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/js/dist/dropdown';
import BabyMotherCare from './webiste/components/BabyMotherCare/babyMotherCare';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './webiste/components/Home/Header';
import Footer from './webiste/components/Home/Footer';
import Home from './webiste/components/Home/Home';
import './App.css';



const App = () => {
 
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/baby-mother-care" element={<BabyMotherCare />} />
      </Routes>
    <Footer /> {/* Footer will be shown on all pages */}
    </BrowserRouter>
            
            
     
  
  );
};

export default App;
