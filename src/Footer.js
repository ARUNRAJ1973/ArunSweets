import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [faq, setFaq] = useState(false)
    const faqpoo = () => {
        setFaq(true)
    }
    const closed = () => {
        setFaq(false)
    }
    return (
        <>
            {faq && (
                <div className='mainfreq'>

                    <div className='freqAq px-5 py-3'>
                        <div className='freqbt'>
                            <div><button className='freqbtn' onClick={closed}>Close</button></div>
                        </div>
                        <div>
                            <h6>1. What types of sweets do you offer?</h6>
                            <p>We offer a wide variety of sweets, including traditional Indian sweets like gulab jamun and jalebi, as well as international favorites such as chocolates, gummies, and candies.</p>
                        </div>
                        <div>
                            <h6>2. Are your sweets made fresh daily?</h6>
                            <p>Yes, all our sweets are made fresh daily to ensure the highest quality and taste.</p>
                        </div>
                        <div>
                            <h6>3. Do you offer any sugar-free or vegan options?</h6>
                            <p>Yes, we have a selection of sugar-free and vegan sweets to accommodate various dietary preferences and restrictions.</p>
                        </div>
                        <div>
                            <h6>4. Can I place a custom order for a special occasion?</h6>
                            <p>Absolutely! We offer custom sweet orders for weddings, birthdays, and other special events. Contact us to discuss your requirements.</p>
                        </div>
                        <div>
                            <h6>5. What is the shelf life of your sweets?</h6>
                            <p>The shelf life varies depending on the type of sweet. Typically, our sweets are best when consumed within 5-7 days, but some can last longer. We can provide specific information for each sweet.</p>
                        </div>
                        <div>
                            <h6>6. Do you offer gift packaging or gift baskets?</h6>
                            <p>Yes, we offer gift packaging and can create custom gift baskets for special occasions. Contact us for more information on our gift options.</p>
                        </div>
                        <div>
                            <h6>7. Can I order sweets online for delivery or pickup?</h6>
                            <p>Yes, we offer online ordering for both pickup and delivery. You can place your order through our website or by phone.</p>
                        </div>
                        <div>
                            <h6>8. What are your store hours?</h6>
                            <p>Our store hours may vary, so please check our website or contact us for the most up-to-date information on our opening and closing times.</p>
                        </div>
                        <div>
                            <h6>9. Do you offer any discounts or loyalty programs?</h6>
                            <p>Yes, we have loyalty programs and occasional discounts for our valued customers. Be sure to ask about our current promotions and rewards when you visit our store.</p>
                        </div>
                        <div>
                            <h6>10. Are your sweets nut-free?</h6>
                            <p>We take allergies seriously. While many of our sweets are nut-free, we do handle nuts in our kitchen, so cross-contamination is possible. Please let our staff know about any allergies, and we'll do our best to accommodate your needs.</p>
                        </div>
                        <div>
                            <h6>11. Can I pre-order sweets for a specific date or event?</h6>
                            <p>Yes, we accept pre-orders for special events and specific dates. Please contact us in advance to discuss your needs and schedule.</p>
                        </div>
                        <div>
                            <h6>12. Do you offer international shipping for your sweets?</h6>
                            <p>Currently, we primarily offer local and national delivery options. However, feel free to reach out, and we can discuss shipping possibilities for international orders.

                                These FAQ questions and answers can help provide valuable information to your customers and improve their experience when visiting your sweet shop. You can adapt and expand upon them as needed to suit the specific offerings and policies of your sweet shop.</p>
                        </div>
                    </div>
                </div>

            )}
            <div className="container-fluid bg-secondary text-center ">
                <div className=" row align-center p-4  g-0">

                    <div className="footermain col-lg-3 col-sm-12 col-xs-12  ">
                        <div><h1 className='text-dark fs-4 '>ARUN` $</h1></div>
                        <p className="text-light ">
                            We work from the heart, with passion to craft
                            authentic sweets and savories with an inimitable
                            character that's truly the taste of Royal India.</p>
                    </div>

                    <div className="footermain col-lg-3 col-sm-12 col-xs-12 ">
                        <div><h1 className='text-dark fs-4 fw-bold '> CATEGORIES</h1></div>
                        <div className='foots fw-bold text-center text-light '>
                            <Link className=' footlink text-light' to="/">Shop</Link>
                            <Link className=' footlink text-light' to="/Gifting">Gifting</Link>
                            <Link className=' footlink text-light' to="/OurBrands">OurBrands</Link>
                            <Link className=' footlink text-light' to="/Contact">Contact</Link>
                            <Link className=' footlink text-light' to="/Login">Login</Link>
                        </div>
                    </div>


                    <div className="footermain col-lg-3 col-sm-12 col-xs-12 ">
                        <div><h1 className='text-dark fw-bold fs-4 pb-3 '>CUSTOMER SERVICE</h1></div>
                        <div className='foots text-light'>
                            <div onClick={faqpoo}>FAQ</div>
                            <div>Terms And Condition</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>

                    <div className="footermain col-lg-3 col-sm-12 col-xs-12 align-center p-2 ">
                        <div><h1 className='text-dark  fw-bold mb-3 fs-4'>FOLLOW US ON* </h1></div>
                        <p className='text-success fw-bold text-light fs-2  '>
                            <a href='https://www.facebook.com'><FontAwesomeIcon className='p-2 text-primary' FontAwesomeIcon icon={faFacebook} /></a>
                            <a href='https://www.instagram.com'><FontAwesomeIcon className='p-2 text-danger' FontAwesomeIcon icon={faInstagram} /></a>
                            <a href='https://www.Whatsapp.com'><FontAwesomeIcon className='p-2 text-success' FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href='https://www.Twitter.com'><FontAwesomeIcon className='p-2 text-primary' FontAwesomeIcon icon={faTwitter} /></a>
                        </p>
                    </div>


                </div>

            </div>
            <div className="copyright p-3 text-center bg-dark">© 2023 COPYRIGHT-ARUN SWEETS & CANDIES - Template By :<strong class="text-success"> ARUNRAJ</strong></div>

        </>
    )
}

export default Footer;