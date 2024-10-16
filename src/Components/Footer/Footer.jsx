import React from 'react'
import logo from '../../assets/imges/nav/logo.png'
import location from '../../assets/imges/footer/location.png'
import call from '../../assets/imges/footer/call.png'
import sms from '../../assets/imges/footer/sms.png'
import facebook from '../../assets/imges/footer/facebook.png'
import instagram from '../../assets/imges/footer/instagram.png'
import youtube from '../../assets/imges/footer/youtube.png'
export default function Footer() {
  return (
    <>
    <div className='footer w-100 py-5'>
      <div className='text-white-container'>
        <div className="col-md-12 d-flex flex-wrap mx-2 justify content-between">
          <div className="col-md-3 me-3 mp-5">
            <img src={logo} alt="" />
            <div className="d-flex">
              <img className='align-center me-2' src={location} alt="" />
              <div className="d-flex flex-column">
                <small className='text-white'>25566 Hc 1, Glenallen,</small>
                <small className='text-white'>Alaska, 99588, USA</small>
              </div>
            </div>

            <div className="d-flex">
              <img className='align-center me-2' src={call} alt="" />
              <div className="d-flex flex-column">
                <small className='text-white'>+603 4784 273 12</small>
              </div>
            </div>

            <div className="d-flex">
              <img className='align-center me-2' src={sms} alt="" />
              <div className="d-flex flex-column">
                <small className='text-white'>rentcars@gmail.com</small>
              </div>
              
            </div>
          </div>
          <div className="col-md-2 d-flex flex-column me-3 mb-5 text-white">
              <p className='mb-4'>Our Products</p>
              <small>Career</small>
              <small>Car</small>
              <small>Packages</small>
              <small>Features</small>
              <small>Priceline</small>
            </div>

            <div className="col-md-2 d-flex flex-column me-3 mb-5 text-white">
            <p className='mb-4'>Resources</p>
            <small>Download</small>
            <small>Help Centre</small>
            <small>Guides</small>
            <small>Partner Network</small>
            <small>Cruises</small>
            <small>Developer</small>
            </div>

            <div className="col-md-2 d-flex flex-column me-3 mb-5 text-white">
            <p className='mb-4'>About Rentcars</p>
            <small>Why choose us</small>
            <small>Our Story</small>
            <small>Investor Relations</small>
            <small>Press Center</small>
            <small>Advertise</small>
            </div>

            <div className="col-md-2 d-flex flex-column me-3 mb-5 text-white">
            <p className='mb-4'>Follow Us</p>
            <div>
            <img className='mx-3' src={facebook} alt="" />
            <img className='mx-3' src={instagram} alt="" />
            <img className='mx-3' src={youtube} alt="" />
            </div>
            </div>
        </div>
        <hr className='text-white' />
        <div>
      <small className='text-md-center text-white'>Copyright 2023 ・ Rentcars, All Rights Reserved</small>
    </div>
      </div>
    </div>
    </>
  )
}
