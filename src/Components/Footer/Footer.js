import React from 'react';
import {RiFacebookCircleLine,RiInstagramLine,RiTwitterLine,RiYoutubeLine} from 'react-icons/ri'
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className='footer-banner'>
        <img src="https://statics.olx.in/external/base/img/phone-app.webp" alt="" />
        <div className='banner-content'>
          <h3>TRY THE OLX APP</h3>
          <span>Buy, sell and find just about anything using the app on your mobile.</span>
        </div>
        <div className='banner-links'>
          <span>GET YOUR APP TODAY</span>
          <div className='banner-apps'>
            <img src="	https://statics.olx.in/external/base/img/appstore_2x.webp" alt="" />
            <img src="	https://statics.olx.in/external/base/img/playstore_2x.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='footer-cards'>
          <span className='heading'>POPULAR LOCATIONS</span>
          <span>Kolkata</span>
          <span>Mumbai</span>
          <span>Chennai</span>
          <span>Pune</span>
        </div>
        <div className='footer-cards'>
          <span className='heading'>Trending Locations</span>
          <span>Bhubaneshwar</span>
          <span>Hyderabad</span>
          <span>Chandigarh</span>
          <span>Nashik</span>
        </div>
        <div className='footer-cards'>
          <span className='heading'>ABOUT US</span>
          <span>About OLX Group</span>
          <span>Careers</span>
          <span>Contact Us</span>
          <span>OLXPeople</span>
          <span>Waah Jobs</span>
        </div>
        <div className='footer-cards'>
          <span className="heading">OLX</span>
          <span>Help</span>
          <span>Sitemap</span>
          <span>Legal & Privacy information</span>
        </div>
        <div className='footer-icons'>
          <div>
            <span className='heading'>FOLLOW US</span>
            <div className='icons'>
              <li><RiFacebookCircleLine/></li>
              <li><RiInstagramLine/></li>
              <li><RiTwitterLine/></li>
              <li><RiYoutubeLine/></li>
            </div>
          </div>
          <div className='footer-apps'>
            <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="img" />
            <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="img" />
          </div>
        </div>
      </div>
      <div className='footer'>
        <p><span>Other Countries</span>   Pakistan - South Africa - Indonesia</p>
        <p><span>Free Classifieds in India.</span> © 2006-2022 OLX </p>
      </div>
    </div>
  );
}

export default Footer;
