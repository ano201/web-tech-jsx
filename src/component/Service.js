import React, { useState, useEffect } from 'react';
import PreLoader from './PreLoader';
import Card from './Card.js';

const Service = () => {
 const [loader, setLoader] = useState(true);
 const [services, setServices] = useState([]);
 useEffect(() => {
  fetch('service.json')
   .then(response => response.json())
   .then(data => {
    setLoader(false)
    setServices(data)
   })
 }, [])
 return (
  <>
   {
   loader ? <PreLoader />
   :
   <div className='container'>
   <h1 className='pulse'>Our Services</h1>
   <div className='row d-flex justify-content-center px-2'>
    {
     services.map(service => <Card service={service}></Card>)
    }
    </div>
    </div>
   }
 </>
 )
}
export default Service;