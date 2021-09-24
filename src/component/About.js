import React from 'react';
import {NavLink} from 'react-router-dom';
import aboutImg from '../img/about.jpeg';
const About = () => {


 return (
  <div>
   <div className='container'>
    <h1>About <strong className='pulse'>who we are...</strong></h1>
     <div className='row justify-content-center align-items-center'>
      <div className='col-lg-5 col-md-6 order-1 order-md-2 mt-2'>
       <img src={aboutImg} className='img-fluid' alt=''/>
      </div>
      <div className='col-lg-5 col-md-6 order-2 order-md-1 mt-2'>
       <h4>WebTech is a leading Website Design & Development Company in Uttara, Dhaka, Bangladesh. We provide one-stop solutions to a wide range of service regarding website development. Since WebTech’s establishment in 2012, our team is carrying out projects related to website design, website development, and online marketing services. Over the last 6 years, we have successfully executed more than 150 projects of our clients across the world.</h4>
      </div>
      <div className='col-lg-10 order-3'>
       <NavLink className='btn btn-secondary fs-3 px-4 py-2 my-3' to='/contact'>Contact Us</NavLink>
      </div>
     </div>
    </div>
  </div>
 )

}
export default About;