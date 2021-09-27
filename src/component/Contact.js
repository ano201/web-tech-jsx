import React from 'react';
import contactImg from '../img/contact.jpeg';
import ContactLink from './ContactLink.js';
const Contact = () => {


 return (
  <div className='container mt-3'>
   <h2 className='pulse'>Contact Us</h2>
   <div className='row align-items-center'>
    <div className='col-md-6 order-md-2 order-1'>
     <img src={contactImg} className='img-fluid' alt=''/>
    </div>
    <div className='col-md-6 my-3 order-md-1 order-2'>
    <h4 className='mb-3'>Subscription</h4>
     <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Your Email</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
     <button type="button" className="btn btn-info mb-3">Send</button>
    </div>
   </div>
   <ContactLink />
  </div>
 )

}
export default Contact;