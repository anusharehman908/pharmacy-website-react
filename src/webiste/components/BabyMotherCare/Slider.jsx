import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import {Fade, Zoom ,Slide} from 'react-slideshow-image'
import './Slider.css'

const slideshowImages = [
    {
       url:require('../../../assests/51466.jpg') 
    },
    {
        url:require('../../../assests/9242312.jpg') 
       
    },
    {
        url:require('../../../assests/8860196.jpg') 
       
    },
    {
        url:require('../../../assests/8404236.jpg') 
    }
]
const divStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'50vh',
    backgroundSize:'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'

}

const Slider = () => {
  return (
      <>
      <div className="container-fluid p-0">
          <div className="slide-container">
              <Fade arrows={false}>
                  {slideshowImages.map((image, index) => (
                  <div key={index}>
                      <div style={{ ...divStyle, backgroundImage:`url(${image.url})` }} >
                          
                      </div>
                  </div>
                  ))}
              </Fade>
          </div>
          </div>
      </>
  )
}

export default Slider