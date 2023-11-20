import React from 'react'
import "./Shop.css"

const Shop = () => {
  return (
    <>

      <div className='shop-bg '>
        <h1 className='colhead  pb-1 text-red-50'> Our Collection</h1>
        <p className='colpara '>
          "EXPERIENCE ARUN'$ DELECTABLE ENSEMBLE.
          INDULGENT SWEETS THAT <br /> CREATE LASTING IMPRESSIONS DISCOVER
          ARUN! SAVOR THE TASTE OF <br /> ROYAL INDIA"</p>
      </div>

      <div className="container py-5">
        <div className=" row ">
          <div className=" col-lg-3 col-sm-6 mb-2  ">
            <div className="cardShop">
              <img className=' giftimg ' src='./pic/w1.jpg' alt='sweet' />
              <div><h3 className="card-title py-2">Assorted Nuts</h3></div>
              <div><a href='/Nuts' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>


          <div className=" col-lg-3 col-sm-6 mb-2  ">
            <div className="cardShop">
              <img className=' giftimg ' src='./pic/sweets/SugarCandy.jpg' alt='sweet' />
              <div><h3 className="card-title py-2">Assorted Sweets</h3></div>
              <div><a href='/Sweets' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>


          <div className=" col-lg-3 col-sm-6 mb-2  ">
            <div className="cardShop">
              <img className=' giftimg ' src='./pic/juice/berry smoothie.jpeg' alt='sweet' />
              <div><h3 className="card-title  py-2">Assorted Juices</h3></div>
              <div><a href='/Juice' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>


          <div className=" col-lg-3 col-sm-6 mb-2  ">
            <div className="cardShop">
              <img className=' giftimg ' src='./pic/cakes/Red Velvet.png' alt='sweet' />
              <div><h3 className="card-title  py-2">Assorted Cakes</h3></div>
              <div><a href='/Cakes' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Shop;

