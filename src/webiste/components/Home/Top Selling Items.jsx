import React from 'react';
import CardSlider from './CardSlider';
 // Ensure you have a CardSlider component

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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
};

const data = [
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fmeiji-fm-t-infant-formula-powdered-900g.webp&w=256&q=50",
    data: "Meiji Fm-T Infant Formula Stage 1 Milk Powder 900G"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fglucerna-powder-vanilla-400g.webp&w=256&q=50",
    data: "Glucerna Milk Powder Vanilla 400G"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F07017.webp&w=256&q=50",
    data: "Sita-Met Tablets 50/500Mg"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fenfamil-a-stage-2-800g.webp&w=256&q=50",
    data: "Priorin Capsules -(1 Strip = 15 Capsules)"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F13621.webp&w=256&q=50",
    data: "Morinaga Bf-1 Milk Powder 900G"
  }
];

const TopSellingItems = () => {
  return (
    <div className='sub-section'>
      <div className="container">
        <div className="row">
          <div className="col-light green-12 pt-3">
            <h2 className='main-heading font-bold text-center'>Top Selling Items</h2>
          </div>
          <div className="col-light-green-12">
            <CardSlider settings={settings} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSellingItems;







