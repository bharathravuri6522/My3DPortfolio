// Footer.jsx
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-white bg-[#383E56] p-4 absolute bottom-0 w-full">
      <p>Copyright © {year} Bharath Ravuri. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
