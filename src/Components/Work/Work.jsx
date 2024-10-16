import React from 'react'
import location from '../../assets/imges/landing-page/location.png'
import car from '../../assets/imges/landing-page/car.png'
import jaguar from '../../assets/imges/landing-page/jaguar.png'
import nissan from '../../assets/imges/landing-page/nissan.png'
import audi from '../../assets/imges/landing-page/audi.png'
import volvo from '../../assets/imges/landing-page/volvo.png'
export default function Work() {
  return (
    <>
    <div className='d-flex justify-content-center m-4 pt-5'>
      <button className='work rounded'>HOW IT WORK</button>
    </div>

    
    <h1 className='text-center m-4'>Most popular cars rental deals</h1>
    <div className='d-flex justify-content-center flex-wrap'>
    <div className='d-flex flex-column align-items-center px-4 mx-4 my-2'>
      <div>
        <img src={location} alt="" />
      </div>
      <h4 className='my-2'>Choose Location</h4>
      <p className='text-muted text-center'>Choose your and find your best car</p>
    </div>

    <div className='car d-flex flex-column align-items-center px-4 mx-4 my-2'>
      <div>
        <img src={car} alt="" />
      </div>
      <h4 className='my-2'>Pick-up date</h4>
      <p className='text-muted text-center'>Select your pick up date and time to book your car</p>
    </div>

    <div className='d-flex flex-column align-items-center px-4 mx-4 my-2'>
      <div>
        <img src={location} alt="" />
      </div>
      <h4 className='my-2'>Book your car</h4>
      <p className='text-muted text-center'>Book your car and we will deliver it directly to you</p>
    </div>

    <div className='container px-4 d-flex justify-content-around flex-wrap my-5'>
      <img src={jaguar} alt="" />
      <img src={nissan} alt="" />
      <img src={audi} alt="" />
      <img src={volvo} alt="" />
    </div>

    </div>
    </>
  )
}



