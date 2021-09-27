import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {


 return (
  <>
   <div className='sticky-top border bg-white'>
    <nav className="container navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <NavLink exact className="navbar-brand fs-2" to="/">Web Tech</NavLink>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ms-auto">
               <li className="nav-item hover-gray">
                 <NavLink exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
               </li>
               <li className="nav-item hover-gray">
                 <NavLink exact activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
               </li>
               <li className="nav-item hover-gray">
                 <NavLink exact activeClassName='menu_active' className="nav-link" to="/service">Service</NavLink>
               </li>
               <li className="nav-item hover-gray">
                 <NavLink exact activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
               </li>
             </ul>
           </div>
         </div>
       </nav>
   </div>
  </>
 )

}
export default Navbar;