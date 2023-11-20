import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom'
import "./Template.css"


const Template = () => {
  return (
    <>
      <div className=' bg-dark  border-bottom  '>
        <div className='navigate container-fluid row g-0'>
          <div className='navig col-sm-3   paragraph'>
            <h1 className='shopname text-wrap'>ARUN `$ <br /> <span className=' text-wrap '>SWEETS & CANDIES</span> </h1>
          </div>

          <div className='col-sm-6 text-light py-4 fw-bold text-center  '>
            <Link className='links' to="/">Shop</Link><span className='slash'> | </span>
            <Link className='links' to="/Gifting">Gifting</Link><span className='slash'> | </span>
            <Link className='links' to="/OurBrands">OurBrands</Link><span className='slash'> | </span>
            <Link className='links' to="/Contact">Contact</Link>
          </div>

          <div className='navig col-sm-3 one'>
            <Link to="/ "><button className='btn text-light'><FontAwesomeIcon icon={faSearch} /></button></Link>
            <Link to="/Login"> <button className='btn text-light'><FontAwesomeIcon icon={faUser} /></button></Link>
            <Link to="/Contact"><button className='btn text-light'><FontAwesomeIcon icon={faCartShopping} /></button></Link>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Template 