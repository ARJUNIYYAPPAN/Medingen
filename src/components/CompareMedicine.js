import React from 'react';
import MedImg from '../assets/image.png';

function CompareMedicine() {
  return (
    <section className="compare-medicine grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="card border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src={`${MedImg}`} alt="Medicine" className="w-20 h-20 mb-4" />
          <h3 className="text-lg font-medium mb-2 text-center">Dolo 650 mg</h3>
          <p className="text-sm text-grayText text-center">Price: Rs. 34</p>
          <button className="mt-4 bg-secondary text-whiteText px-4 py-2 rounded-md hover:bg-opacity-80">
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default CompareMedicine;
