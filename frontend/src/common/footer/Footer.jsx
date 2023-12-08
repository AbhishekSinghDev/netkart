import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>NetKart</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon flex items-center justify-start gap-4">
              <div className="img cursor-pointer flex gap-3 items-center justify-center">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img cursor-pointer flex gap-3 items-center justify-center">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li className="quick_links">Careers</li>
              <li className="quick_links">Our Stores</li>
              <li className="quick_links">Our Cares</li>
              <li className="quick_links">Terms & Conditions</li>
              <li className="quick_links">Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li className="quick_links">Help Center </li>
              <li className="quick_links">How to Buy </li>
              <li className="quick_links">Track Your Order </li>
              <li className="quick_links">Corporate & Bulk Purchasing </li>
              <li className="quick_links">Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li className="quick_links">Email: netkart.help@gmail.com</li>
              <li className="quick_links">Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
