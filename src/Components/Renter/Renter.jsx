import React from 'react'
import car from '../../assets/imges/landing-page/car 2 1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {} from 'react-icons/fa';

export default function Renter() {
  return (
    <div>
            <div className="renter">
                <article>
                    <h1>Find, book and rent a car</h1>
                    <span>Easily</span>
                    <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                </article>
                <img src={car} alt="" />
            </div>

        <div className='container d-flex mb-3 mt-4 shadow'>
            <input className='w-50 ' type="text" placeholder='Search by name' />
            <button className=' w-30 btn bold btn-primary flex.nowrap'>Search</button>
        </div>
        
        
        <div className='d-flex justify-content-center m-4 pt-5'>
          <button className='work rounded'>POPULAR RENTAL DEALS</button>
          </div>
          <h1 className='text-center m-4'>Most popular cars rental deals
          </h1>
          <div className='d-flex justify-content-center my-5'>
            <button className='btn btn-outline-secondary px-5'>Show all vehicles
              <i className='px-2 fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
    </div>
  )
}
