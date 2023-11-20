import React from 'react'
import "./OurBrands.css"

const OurBrands = () => {
  return (

    <>
      <div className='brands-bg '>
        <h1 className='colhead  pb-1 text-neutral-50'> Presenting ARUN'$ <br />  Signature Brands</h1>
        <p className='colpara'>
          EXCEPTIONAL MOMENTS, DEMAND EXTRAORDINARY CELEBRATIONS. <br />
          DISCOVER ARUN, IN MORE WAYS THAN ONE.
        </p>
      </div>


      <div className='row g-0'>

        <div className='col-lg-6  quotesone'>
          <p className='p-5 text-center '>The Taste of Royal India, perfected  over generations Arun Sweets, sweetening celebrations since 1988.</p>
        </div>

        <div className='col-lg-6 quotestwo'>
          <p className='p-5 text-center  subquote2'>
            We work from the heart, with passion to craft authentic sweets
            and savories with an inimitable character that's truly the taste of
            royal India. From lavish kaju sweets, to pure ghee delicacies and
            freshly made savories, every morsel is imagined and created with
            a single intent, to deliver joy - true ARUN.
          </p>
        </div>
      </div>

      <div className='w-100  bg-dark d-flex justify-content-center align-items-center flex-column  '>
        <div><img className='w-100 pt-5 ' src='./pic/logohaldiram.png' alt='' /></div>
        <div>
          <p className=' fs-5 p-5 fw-semibold text-light text-center'>
            Introducing Haldirams, a special edition collection from the House of Arun Sweets, exclusively crafted as a travel retail brand for airports.
            Experience a curation of rich and indulgent Indian sweets and savouries, created for the global Indian. To the guests travelling,
            across, Haldiram will unfold in the rich stories of Karnataka and India in its expansive collection of rich sweets and savouries.
            Crafted with heritage recipes, luxurious ingredients and the inimitable quality of Arun Sweets - we present Haldiram,
            the hallmark of Karnataka's hospitality and heritage of indulgent experiences to the world.<br />-by ARUN SWEETS
          </p>
        </div>
      </div>

      <div className="bg-secondary py-5">
        <div className="row p-2 g-0 ">
          <div className='col-lg-3 col-sm-12 wedding '><img className='brandsub' src='./pic/wp1.jpg' alt='wedding' /></div>
          <div className='col-lg-3 col-sm-12 wedding '><img className='brandsub' src='./pic/wp1.jpg' alt='wedding' /></div>
          <div className='col-lg-3 col-sm-12 wedding '><img className='brandsub' src='./pic/wp1.jpg' alt='wedding' /></div>
          <div className='col-lg-3 col-sm-12 wedding '><img className='brandsub' src='./pic/wp1.jpg' alt='wedding' /></div>
        </div>
      </div>

      <div className='text-center bg-dark text-light p-5 fw-semibold  '>
        <p>
          Arun Sweets wedding service, Royal Union is, in itself, a game
          changer with bespoke mithai arrangements tailor-made for every occasion
          that the great Indian wedding calls for. With three
          decades of expertise in the art of crafting heritage sweets,
          our team works along with you, planning for those sweet moments and those
          moments of weakness.Please write to our wedding concierge at mailto:care@arunsweets.net
        </p>
      </div>
    </>
  )
}

export default OurBrands;
