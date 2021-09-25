import React,{useState, useEffect} from 'react';
import Card from './Card.js';
const Service = () => {
const [services, setServices] = useState([]);
useEffect(()=>{
 fetch('service.json')
 .then(response => response.json())
 .then(data => setServices(data))
},[])
 return (
  <div className='container'>
   <h1 className='pulse'>Our Services</h1>
   <div className='row d-flex justify-content-center px-2'>
    {
     services.map(service => <Card service={service}></Card>)
    }
   </div>
  </div>
 )

}
export default Service;