import React from 'react';
import './Footer.css'; 

function Footer() {
    const handleClick = () => {
        console.log('Link clicked!');
      };
  return (
    <footer id="footer">
        <div class="footer-content container">
            <div class="footer-section about">
                <h2>About Us</h2>
                <p>Provide a brief description of your website or company.</p>
                </div>
            <div class="footer-section contact">
                <h2>Contact Us</h2>
                <p id="email">Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div class="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li>
                    <li><a href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li>
                    <li><a href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li>
                    <li><a href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li>
                    </ul>
            </div>
            <div class="footer-section social">
                <h2>Follow Us</h2>
                <a class="fa fa-facebook" href="https://www.google.com/" onClick={handleClick}><p></p></a>
                <a class="fa fa-twitter" id="linkc" href="https://www.google.com/" onClick={handleClick}><p></p></a>
                <a class="fa fa-instagram" id="linkc" href="https://www.google.com/" onClick={handleClick}><p></p></a>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 The Daily Bugle. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
  );
}

export default Footer;
