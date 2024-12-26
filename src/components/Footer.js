import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <p>©2024 Medingen. All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
