import React from 'react'
import './App.css'
import ScubaDiving from './static/Scuba Diving.jpg'
import BungeeJumping from './static/Bungee Jumping.jpg'
import { BsClock, BsFillCameraFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const App = () => {
  return (
    <div>
      <div className="box">
        <div className="top-left">Universal Adventures</div>
      </div>
      <div className="conta my-4">
        <div className="module">
          <p >Sky Diving</p>
        </div>
        <div id="sectionTwo">

          <div className="tripSection">
            <img className="img" src={ScubaDiving} alt="" />
            <div className='time'>
            <img className="img2" src={ScubaDiving} alt="" />
            <div className='location1 mt-2'>
                <span className='ms-2'><BsClock className='icon' />8 hours</span>
                <span className='ms-5'><IoLocationSharp className='icon' /> Goa,India</span>
              </div>
            </div>
            <div className="details ">
              <p className='mt-3 heading'>Scuba Diving in Grande Island,Goa</p>
              <div className='text-muted location mt-2'>
                <span className='ms-2'><BsClock className='icon' />8 hours</span>
                <span className='ms-5'><IoLocationSharp className='icon' /> Goa,India</span>
              </div>
              <div className='facility' >
              <div className='facilities'><div className='facilityIcon'><GiKnifeFork style={{ fontSize: '30px' }} /> </div><div className='facilityName' >Snacks</div></div>
                <div className='facilities'><div className='facilityIcon'><AiFillCar style={{ fontSize: '30px' }} /> </div><div className='facilityName' >Transport</div></div>
                <div className='facilities'><div className='facilityIcon'><BsFillCameraFill style={{ fontSize: '30px' }} /> </div><div className='facilityName' >Photo/Video</div></div>
                <div className='facilities'><div className='facilityIcon'><FiActivity style={{ fontSize: '30px' }} /> </div><div className='facilityName' >Activities</div></div>
              </div>
              <div className=' mt-md-4 mt-3 mb-md-0 mb-3 specialActivity'>
              <span className='special'>Long tail boat ride
                </span>
                <span className='special'>Underwater Photo &  Video
                </span>
              </div>
            </div>
            <div className="rates">
              <div className='rev'>
              <div className="stars mt-3">
                <AiFillStar className='me-1' />
                <AiFillStar className='me-1' />
                <AiFillStar className='me-1' />
                <AiFillStar className='me-1' />
                <span className='rating'> 4.7</span>
              </div>
              <div className="reviews text-muted ">
                36 reviews
              </div>
              </div>
              <div className="mainRate mt-md-4 mt-3 ">
                <div className='price'>
                  <span className='mt-md-2 mt-1'>Starting from</span>
                  <div className='mt-md-2 mt-0 rupees'>₹ 1799</div>
                </div>
                <button className='mt-2'>View Details</button>
              </div>
            </div>
          </div>

          <div className="tripSection">
            <img className="img" src={BungeeJumping} alt="" />
            <div className='time'>
            <img className="img2" src={BungeeJumping} alt="" />
            <div className='location1 mt-2'>
                <span className='ms-2'><BsClock className='icon' /> 30 minutes</span>
                <span className='ms-5'><IoLocationSharp className='icon' /> Goa,India</span>
              </div>
            </div>
            <div className="details ">
              <p className='mt-3 heading'>Bungee Jumping in Goa</p>
              <div className='text-muted location mt-2'>
                <span className='ms-2'><BsClock className='icon' /> 30 minutes</span>
                <span className='ms-5'><IoLocationSharp className='icon' /> Goa,India</span>
              </div>
              <div className='facility' >
                <div className='facilities'><div className='facilityIcon'><BsFillCameraFill style={{ fontSize: '30px' }} /> </div><div className='facilityName' >Photo/Video</div></div>
                <div className='facilities'><div className='facilityIcon'><FiActivity style={{ fontSize: '30px' }} /> </div><div className='facilityName' >Activities</div></div>
              </div>
              <div className='mt-md-4 mt-3 mb-md-0 mb-3 specialActivity'>
                <span className='special'>61 meter height
                </span>
                <span className='special'>Jump Photo &  Video
                </span>
                <span className='special'>Certificate
                </span>
              </div>
            </div>
            <div className="rates">
              <div className='rev'>
              <div className="stars mt-3">
                <AiFillStar className='me-1' />
                <AiFillStar className='me-1' />
                <AiFillStar className='me-1' />
                <AiFillStar className='me-1' />
                <span className='rating'> 4.7</span>
              </div>
              <div className="reviews text-muted ">
                36 reviews
              </div>
              </div>
              <div className="mainRate mt-md-4 mt-3">
                <div className='price'>
                  <span className='mt-md-2 mt-1'>Starting from</span>
                  <div className='mt-md-2 mt-0 rupees'>₹ 2800</div>
                </div>
                <button className='mt-2'>View Details</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
