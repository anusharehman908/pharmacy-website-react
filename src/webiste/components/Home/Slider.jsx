import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import {Fade, Zoom ,Slide} from 'react-slideshow-image'
import './Slider.css'

const slideshowImages = [
    {
       url:require('../../../assests/splash3.jpg') 
    },
    {
        url:require('../../../assests/splash2.jpg') 
       
    },
    {
        url:require('../../../assests/splash1.jpg') 
       
    },
    {
        url:require('../../../assests/splash4.jpg') 
    }
]
const divStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'75vh',
    backgroundSize:'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'

}

const Slider = () => {
  return (
      <>
          <div className="slide-container">
              <Fade arrows={false}>
                  {slideshowImages.map((image, index) => (
                  <div key={index}>
                      <div style={{ ...divStyle, backgroundImage:`url(${image.url})` }}>
                          
                      </div>
                  </div>
                  ))}
              </Fade>
          </div>
      </>
  )
}

export default Slider