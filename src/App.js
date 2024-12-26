import React from 'react';
import Header from './components/Header';
import MedicineDetails from './components/MedicineDetails';
import FAQSection from './components/FAQSection';
import CompareMedicine from './components/CompareMedicine';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div className="bg-lightGray min-h-screen">
      <Header />
      <div className="container mx-auto">
        <MedicineDetails />
        <CompareMedicine />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
