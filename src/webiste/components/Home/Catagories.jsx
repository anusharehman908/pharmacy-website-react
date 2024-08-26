
// Categories.js
import React from 'react';
import CardSlider from './CardSlider';



    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        infinite: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
           
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


const data = [
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FCategory%2520Banner%2FCategory-image-icon%2FMultivitamins.jpg&w=256&q=75",
    data: "Multivitamins"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FCategory%2520Banner%2FCategory-image-icon%2Forganic.gif&w=256&q=75",
    data: "Organic Remedy"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FCategory%2520Banner%2FCategory-image-icon%2F2.jpg&w=256&q=75",
    data: "Baby & Mother Care"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FCategory%2520Banner%2FCategory-image-icon%2F4.jpg&w=256&q=75",
    data: "Nutritions & Supplements"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FCategory%2520Banner%2FCategory-image-icon%2F3.jpg&w=256&q=75",
    data: "Medicine"
  },
  {
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PQJyvnDwb-oWhFsaLbgxnu6LYSq35xh33Q&s",
    data: "Vitamin C"
  }
];

const Categories = () => {
  return (
    <div className='sub-section'>
      <div className="container">
        <div className="row">
          <div className="col-light green-12 pt-3">
            <h2 className='main-heading font-bold text-center'>Categories</h2>
                  </div>
                  <div className="col-light-green-12">
                
            <CardSlider  settings={settings} data={data}   />
                      
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;









