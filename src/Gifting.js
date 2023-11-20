import React from 'react'
import "./Gifting.css"
const Gifting = () => {
  return (

    <>
      <div className=' gifting-bg'>
        <h1 className='colhead pb-1 text-neutral-50'> Embellished With <h1>Testaments Of Love.</h1></h1>
        <p className='colpara'> EXPLORE OUR EXQUISITE GIFT SELECTION.</p>
      </div>

      <div className="container py-5">
        <div className=" row ">
          <div className=" col-lg-4 col-sm-6 mb-2  ">
            <div className="cardShop ">
              <img className=' juiceimg ' src='./pic/nuts/cashew.jpeg' alt='sweet' />
              <div><h3 className="card-title py-2">Assorted Nuts</h3></div>
              <div><a href='/Nuts' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>

          <div className=" col-lg-4 col-sm-6 mb-2  ">
            <div className="cardShop ">
              <img className=' juiceimg ' src='./pic/sweets/Coconut Ladoo.jpeg' alt='sweet' />
              <div><h3 className="card-title py-2">Assorted Sweets</h3></div>
              <div><a href='/Sweets' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>

          <div className=" col-lg-4 col-sm-6 mb-2  ">
            <div className="cardShop ">
              <img className=' juiceimg ' src='./pic/cakes/Icecream Berry.jpeg' alt='sweet' />
              <div><h3 className="card-title  py-2">Assorted Cakes</h3></div>
              <div><a href='/Cakes' className='btn btn-success w-100'>Shop Now</a></div>
            </div>
          </div>

        </div>
      </div>

      <div className=' d-flex py-5 bg-dark'>
        <div className='row w-100'>
          <div className=' col-lg-5 col-md-6 col-sm-12 one mb-2'>
            <img className='giftwith border border-light rounded ' src='./pic/gift2.jpg' alt='' />
          </div>
          <div className=' col-lg-7 col-md-6 col-sm-12 mb-2 text-light'>
            <p className='pt-1 fw-bold text-justify paragraph'>
              <h1 className='fw-bold fs-1 mt-4 ps-5  text-orange-400'> Customize Your Gift Box </h1><br />
              We've made it a joy to personalize a gift from ARUN Sweets, just the way you want.
              Made to order to celebrate your special moments and milestone occasions, we walk
              every mile of the way with you. From discussing personalisation options, crafting
              singularly beautiful designs to compliment your celebration, selecting the finest
              products, we pamper your every gifting need with impeccable care. Get in touch with
              our gifting concierge for a personalized consultation for all your gifting needs....</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gifting;