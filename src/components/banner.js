import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import bannerImage from '../assets/banner.jpg';
import logoImage from '../assets/logo.png';


function Banner() {

  return (
    <div className="mainBanner">
      <div className="banner">
        <div className='logo'>
          <img className="logoImg" src={logoImage} alt="logo"/>
        </div>

        <div className='contactTop'>
          <ul className='contactTopUl'>
            <li className='liWhatsapp'>
              <a href="https://wa.me/+5519978175588" rel="noreferrer" target="_blank" aria-label="Whatsapp link">
                <span className='icon'><FaWhatsapp size={30} color='#fff'/></span>
              </a>
            </li>
            <li className='liInstagram'>
              <a href="https://www.instagram.com/rrmultimarcasan/" rel="noreferrer" target="_blank" aria-label="Instagram link">
                <span className='icon'><FaInstagram size={30} color='#fff'/></span>
              </a>
            </li>
          </ul>
        </div>

        <img src={bannerImage} alt="Banner" className='bannerOfPage' />

      </div>

    </div>
  );
}

export default Banner;
