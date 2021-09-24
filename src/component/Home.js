import React from 'react';
import {NavLink} from 'react-router-dom';
import webTech from '../img/webTech.svg';
const Home = ()=> {
 
 
 
 return (
  <div className='container'>
   <sections className='d-flex align-items-center mt-lg-3'>
     <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-md-1'>
       <h1>Welcome to <strong className='pulse'>Web Tech</strong></h1>
       <h3 className='my-3'>We are the team of creative developer making awesome websites.</h3>
       <div className='mt-3'>
        <NavLink to='/service' className='btn btn-outline-info rounded-pill fs-md-3 px-4 py-2'>Get Started</NavLink>
       </div>
      </div>
      <div className='col-md-6 order-1 order-md-2 header-img'>
       <img src={webTech} className='img-fluid pulse' alt='' />
      </div>
     </div>
   </sections>
   <section className='mt-3'>
    <h2>Best website development site in Bangladesh</h2>
    <p>WebTech is a leading Website Development Company in Bangladesh. We provide one-stop solutions to a wide range of service regarding website design and development. Since WebTech’s establishment in 2012, our team is carrying out projects related to website design, website development, and online marketing services. Over the last 6 years, we have successfully executed more than 150 projects of our clients across the world. We keep our clients at the heart of everything we do at WebTech. Regardless of the size and nature of the projects, our team always gives relentless effort to bring out the best for our clients. Hence, the clients do not have to search for numerous website development company in Bangladesh for rolling out their business operations. The WebTech team has expertise in Graphic Design (Office stationery), Web Application Development, Search Engine Optimization (SEO), Social Media Marketing (SMM), Search Engine Marketing (SEM ), and Content Marketing.</p>
   </section>
  </div>
  )
 
}
export default Home;