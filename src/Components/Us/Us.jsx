import React from 'react'
import car2 from '../../assets/imges/landing-page/car2.png'
import user from '../../assets/imges/landing-page/sec-5/user.png'
import message from '../../assets/imges/landing-page/sec-5/message.png'
import chat from '../../assets/imges/landing-page/sec-5/chat.png'
export default function Us() {
  return (
    <>
    <div className='d-flex my-5 py-5'>
      <div className=' car2 d-flex align-items-center w-50'>
        <img src={car2} alt="" />
      </div>

      <div>
      <button className='us rounded'>WHY CHOOSE US</button>
      <h4 className='my-3'>We offer the best experience with our rental deals</h4>
      <div className='d-flex align-items-center'>
        <img className='p-3 ps-0' src={user} alt="" />
        <article>
          <h6 className='mb-0'>Best price guaranteed</h6>
          <small>Find a lower price? We’ll refund you 100% of the difference.</small>
        </article>
      </div>

      <div className='d-flex align-items-center'>
        <img className='p-3 ps-0' src={user} alt="" />
        <article>
          <h6 className='mb-0'>24 hour car delivery</h6>
          <small>Book your car anytime and we will deliver it directly to you.</small>
        </article>
      </div>

      <div className='d-flex align-items-center'>
        <img className='p-3 ps-0' src={message} alt="" />
        <article>
          <h6 className='mb-0'>Best price guaranteed</h6>
          <small>Find a lower price? We’ll refund you 100% of the difference.</small>
        </article>
      </div>

      <div className='d-flex align-items-center'>
        <img className='p-3 ps-0' src={chat} alt="" />
        <article>
          <h6 className='mb-0'>24/7 technical support</h6>
          <small>Have a question? Contact Rentcars support any time when you have problem.</small>
        </article>
      </div>
   
      </div>

    </div>
    </>
  )
}





