import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const PerLoader = ()=> {
 
 
 return (
  <div style={{width:'100vw', height:'50vh'}} className='m-auto position-relative' >
   <div className='position-absolute top-50 start-50 translate-middle' style={{width:'100px', height:'100px'}}>
    <Loader
     type = 'Oval'
     color = "Teal"
     height = { 100 }
     width = { 100 }
    />
   </div>
  </div>
  )
 
}
export default PerLoader;