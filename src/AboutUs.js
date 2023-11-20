import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {

  return (
    <>
      <div className='about-bg'>
        <h1 className='colhead  pb-1 text-neutral-50'> The Taste of Royal India,  <br />perfected over generations</h1>
        <p className='colpara '>
          EXCEPTIONAL MOMENTS, DEMAND EXTRAORDINARY CELEBRATIONS. <br />
          DISCOVER ARUN, IN MORE WAYS THAN ONE.
        </p>
      </div>

      <div className='award'>
        <h1 className=' fw-bold fs-1 pt-5 ps-5'>
          Excellence in Every Morsel
        </h1><br />
        <p className='fw-bold ps-5 pb-5'>
          For over 3 decades, ARUN Sweets has grown to be synonymous with premium quality Indian Sweets. It has created a niche for itself for being one of the most premium and giftable brands in Bengaluru today.
        </p>
      </div>

      <div className='container bg-black'>
        <div className='row w-100'>
          <div className=' col-lg-8 col-md-6 col-sm-12 paragraphs'>
            <p className='text-center '>
              <h1 className='fw-bold fs-1 pt-4  text-orange-400'> Taste of Royal India  </h1><br />
              ARUN owes its success to its know-how that is the culmination of tradition, innovation
              and uncompromising quality. The dynamism of ARUN is also the result of it's
              unrelenting quest to restyle and update its product range, packaging , to cater
              to the changing demographic and dynamics of changing India.</p>
          </div>
          <div className=' col-lg-4 col-md-6 col-sm-12 one my-2'>
            <img className=' ps-2' src='./pic/wp2.jpg' alt='' />
          </div>
        </div>
      </div>

      <div className="container row p-3 g-0">

        <div className='col-lg-4 col-sm-12  '><img className='' src='./pic/luxurious.png' alt='wedding' /></div>
        <div className='paragraphs col-lg-8 col-sm-12  text-dark'>
          <h1 className='fw-bold ps-4 fs-1 '>Luxurious Mithais, Accessible To Everyone</h1>
          <p className='ps-4 fw-semibold'>We are obsessed with authenticity and believe
            in curating flavours that suit your taste and your celebrations. The sweet smelling
            saffron in our Malpua we get from Kashmir, and the melt-in-your-mouth paneer in our
            savouries from Delhi - because great taste can never have boundaries.</p>
        </div>
      </div>

    </>
  )
}

export default AboutUs;