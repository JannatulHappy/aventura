import React from "react";
import "./Footer.css";
import footerImg from "../../../assets/logo-1.png";
import visaImg from '../../../assets/Visa.png'
import masterCardImg from '../../../assets/MasterCard.png'
import maestroImg from '../../../assets/Maestro.png'
import americanExpressImg from '../../../assets/American-Express.png'
import PaypalImg from '../../../assets/PayPal.png'

const Footer = () => {
  // footer start
  return (
    <div className="footer-container">
      <div className="footer container p-5 mx-auto row mt-5">
        <div className="col-md-6 col-lg-3 col-12 ">
          <img src={footerImg} alt="" />
          <hr className="footer-hr" />
          <p className="footer-text pe-3">
            Aventura provides you with a full solution for booking system,
            travel, and tour management. Its stunning beauty and the fashionable
            design will help you to own an awesome travel site for your
            business.
          </p>
          <div className="col-md-4 col-6 ps-5">
            <ul className="icon list-unstyled ">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-facebook-messenger"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Quick Link</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Home</p>
          <p className="footer-text">Destinations</p>
          <p className="footer-text">My Orders</p>
          <p className="footer-text">Manage All Order</p>
          <p className="footer-text">Add Destination</p>
          <p className="footer-text">Contact</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Destinations</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Italian Delights</p>
          <p className="footer-text">Iceland Northern Lights Adventure</p>
          <p className="footer-text">Best of Greece</p>
          <p className="footer-text">Epic London Discovery</p>
          <p className="footer-text">Fantastic Turkey</p>
          <p className="footer-text">Best of Sicily</p>
          
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Book Destination</h3>
          <hr className="footer-hr" />
          <p className="footer-text">(1800) 574 9687</p>
          <p className="footer-text">65, Street, New Youk, MAC 5245</p>
          <p className="footer-text"> hi@adventura.com</p>
          <p className="footer-text">
            Contact us now for a quote about consultation ( Available 24/7 )
          </p>
        </div>
        <hr className="text-warning my-5" />
        <div className="row">
          <div className="col-lg-9 col-md-6 col-1"></div>
          <div className="col-lg-3 col-md-6 col-11 payment">
            <img src={visaImg} alt="" />
            <img src={masterCardImg} alt="" />
            <img src={maestroImg} alt="" />
            <img src={americanExpressImg} alt="" />
            <img src={PaypalImg} alt="" />
          </div>
        </div>
        <hr className="text-warning mt-5" />
        <p className="footer-last-text text-center mt-5">
          © 2021 -Adventura. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
