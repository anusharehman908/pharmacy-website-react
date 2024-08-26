import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assests/footer_logo.jpg';
const Footer = () => {
  return (
      <>
          <footer className=' overflow-hidden ps-5 pe-5' style={{backgroundColor:'#7fd0ff'}}>
          <div className="container-fluid footer">
            
                  <div className="row py-5">
                      <div className="col-lg-3 col-md-6">
                          <a href='' className='f-logo '><img src={logo} className="img-fluid" alt="" /></a>
                          <p className='pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, veritatis!</p>
                          <div className="footer-social">
                              <a href=''>
                              <FontAwesomeIcon icon={faFacebookF} />                              </a>
                              <a href=''>
                              <FontAwesomeIcon icon={faInstagram} />
                              </a>
                              <a href=''>
                              <FontAwesomeIcon icon={faWhatsapp} />
                              </a>
                          </div>
                      </div>
                      <div className="col-lg col-md-6 pt-lg-0 pt-md-0 pt-5">
                          <h3 className='footer-heading lora'>Category</h3>
                        <ul className='d-flex flex-column gap-2 pt-3'>
                        <li className='footer-text'><a>Baby & Mother Care</a></li>
                            <li className='footer-text'><a>Nutritions & Supplements</a></li>
                            <li className='footer-text'><a>Medicine</a></li>
                            <li className='footer-text'><a>OTC And Health Need</a></li>
                        </ul>
                      </div>
                      <div className="col-lg col-md-6 pt-lg-0 pt-5">
                      <h3 className='footer-heading lora'>Support</h3>
                        <ul className='d-flex flex-column gap-2 pt-3'>
                        <li className='footer-text'><a>Return Policy</a></li>
                            <li className='footer-text'><a>FAQs</a></li>
                            <li className='footer-text'><a>Privacy Policy</a></li>
                            <li className='footer-text'><a>Blogs</a></li>
                        </ul>
                      </div>
                      <div className="col-lg col-md-6 pt-lg-0 pt-5">
                      <h3 className='footer-heading lora'>Contact Us</h3>
                        <ul className='d-flex flex-column gap-2 pt-3'>
                        <li className='footer-text'>Phone:03320405516</li>
                            <li className='footer-text'>Email:anusharehmanqureshi@gmail.com</li>
                        </ul>
                      </div>
                  </div>
              </div>
              
              <div className="container-fluid footer-foot">
                  <div className="container">
                      <div className="text-center py-2">
                          <h6 >© 2024 abc. Design</h6>
                      </div>
                  </div>
              </div>
              </footer>
      </>
  )
}

export default Footer