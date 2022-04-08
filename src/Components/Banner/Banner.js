import React from 'react';
import './Banner.css';
import Arrow from '../../assets/Arrow'


function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
           <select className='menu'>
             <option value='null'>ALL CATEGORIES</option>
             <Arrow></Arrow>
             <option>Cars</option>
             <option>Motorcycles</option>
             <option>Mobile Phones</option>
             <option>For Sale:Houses & Apartments</option>
             <option>Scooters</option>
             <option>Commercial & other Vehicles</option>
             <option>For Rent: Houses & Apartments</option>
           </select>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: Houses & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="https://statics.olx.in/olxin/banners/hero_bg_in_v1@1x.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
