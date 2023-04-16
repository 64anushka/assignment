import React from 'react';
import '../css/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <span className="text">
          Assignment &copy; {year}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
