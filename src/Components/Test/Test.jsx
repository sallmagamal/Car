import React from 'react'
import photo1 from '../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png'
import photo2 from '../../assets/imges/landing-page/sec-6/girl.png'
import star from '../../assets/imges/card/star.png'
import android from '../../assets/imges/landing-page/andriod.png'
import ios from '../../assets/imges/landing-page/ios.png'
import iphone from '../../assets/imges/landing-page/sec-7/iPhone-14.png'
export default function Test() {
  return (
    <>
    <div className='d-flex justify-content-center m-4 pt-5'>
      <button className='us rounded'>TEST IMONIALS</button>
    </div>
    <h1 className='text-center m-4 mb-5'>Most popular cars rental deals</h1>
    <div className='d-flex flex-wrap justify-content-around'>
      <div className="photo mb-3 mx-2 shadow">
        <div className="row">
          <div className="col-md-6">
            <img src={photo1} alt="" />
          </div>
          <div className="col-md-6">
            <div className="photo1">
              <h1 className='mb-0'>5.5
              <small>stars</small>
              </h1>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className='my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
          </div>
          <p className='bold mb-0'>Charlie Johnson</p>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </div>
        
      </div>

    </div>

    <div className='d-flex flex-wrap justify-content-around'>
      <div className="photo mb-3 mx-2 shadow">
        <div className="row">
          <div className="col-md-6">
            <img src={photo2} alt="" />
          </div>
          <div className="col-md-6">
            <div className="photo1">
              <h1 className='mb-0'>5.5
              <small>stars</small>
              </h1>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className='my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
          </div>
          <p className='bold mb-0'>Charlie Johnson</p>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </div>
        
      </div>

    </div>

   <div className='d-flex mt-5 justify-content-around'>
    <div>
      <article className='mx-3'>
        <h1>
        Download Rentcars App for
          <span className='text-primary'>FREE</span>
        </h1>
        <small>For faster, easier booking and exclusive deals.</small>
        <div className='my-3 my-3 col-md-7 d-flex justify-content-center'>
          <img className='me-2' src={android} alt="" />
          <img src={ios} alt="" />
        </div>
        <form className='d-flex flex-column col-md-7 ng-untouched ng-valid'>
          <input className='f my-1 px-3' type="text" placeholder='Name' />
          <input className='f my-1 px-3' type="text" placeholder='Phone Number'/>
          <input className='f my-1 px-3' type="text" placeholder='Email'/>
        </form>
        <div className='d-flex justify-content-center my-2'>
          <button className='btn bold btn-primary px-5'>Send</button>
        </div>
      </article>
    </div>
    <div className='d-flex justify-content-center align-items-end'>
      <img src={iphone} alt="" />
    </div>
   </div>
   

    </>
  )
}
