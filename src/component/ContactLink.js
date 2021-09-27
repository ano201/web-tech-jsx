import React from 'react';
import wapp from '../img/social/WhatsApp.svg';
import fb from '../img/social/Facebook.svg';
import messenger from '../img/social/Messenger.svg';
import twitter from '../img/social/Twitter.svg';
import insta from '../img/social/Instagram.svg';
import mail from '../img/social/Mail.svg';
const ContactLink = ()=> {
 
 
 return (
  <div className='row mb-4'>
   <h2>Get connected with us</h2>
   <div className='col-md-10 m-auto d-flex justify-content-around'>
    <div>
     <a href='https://facebook.com/murad.hossain.201'>
      <img className='img-fluid' src={fb} alt='' />
     </a>
    </div>
    <div>
     <a href='https://m.me/murad.hossain.201'>
      <img className='img-fluid' src={messenger} alt='' />
     </a>
    </div>
    <div>
     <a href='https://wa.me/01793950201'>
      <img className='img-fluid' src={wapp} alt='' />
     </a>
    </div>
    <div>
     <a href='https://www.instagram.com/somudrobilas/'>
      <img className='img-fluid' src={insta} alt='' />
     </a>
    </div>
    <div>
     <a href='mailto:ahmu689@gmail.com'>
      <img className='img-fluid' src={mail} alt='' />
     </a>
    </div>
    <div>
     <a href='http://twitter.com/muradmt201'>
      <img className='img-fluid' src={twitter} alt='' />
     </a>
    </div>
   </div>
  </div>
  )
 
}
export default ContactLink;