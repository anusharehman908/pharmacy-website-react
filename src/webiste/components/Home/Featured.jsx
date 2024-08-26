// import React from 'react';
// import CardSlider from './CardSlider';

// const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     speed: 2000,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//     infinite: true,
//     pauseOnHover: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// }


// const data = [
// {
// images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fpanadol-night-500-25mg-tab-20s.webp&w=256&q=50",
// data: "Rps 641"
// },
// {
// images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fmulti-for-women-30s-tablets-1s.webp&w=256&q=50",
// data: "Rps 641"
// },
// {
// images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F01365.jpg&w=256&q=50",
// data: "Rps 641"
// },
// {
// images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F14234.webp&w=256&q=50",
// data: "Rps 641"
// },
// {
// images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F03190.png&w=256&q=50",
// data: "Rps 641"
// },
// {
// images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fspectra-block-spf60-sunblock-40g.webp&w=256&q=50",
// data: "Rps 641"
// },
// {
// images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxJpFS8S44x_4Uhv4kGQIvGKUVA38yM_GmA&s",
// data: "Rps 641"
// },
// {
// images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDpeBBiqAckd643C9VEfaTJGB6p7SMMVY2w&s",
// data: "Rps 641"
// },



// ];


// const Featured = () => {
//     return (
//         <div className='sub-section'>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12 pt-3">
//                 <h2 className='main-heading lora font-bold text-center'>Featured Products</h2>
//                       </div>
//                       <div className="col-lg-12">
//                 <CardSlider  settings={settings} data={data} />
                          
//                       </div>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default Featured





























import React from 'react';
import CardSlider from './CardSlider';
import './Featured.css'; // Import the CSS file

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fpanadol-night-500-25mg-tab-20s.webp&w=256&q=50",
    data: "Rps 641"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fmulti-for-women-30s-tablets-1s.webp&w=256&q=50",
    data: "Rps 641"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F01365.jpg&w=256&q=50",
    data: "Rps 641"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F14234.webp&w=256&q=50",
    data: "Rps 641"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F03190.png&w=256&q=50",
    data: "Rps 641"
  },
  {
    images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fspectra-block-spf60-sunblock-40g.webp&w=256&q=50",
    data: "Rps 641"
  },
  {
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxJpFS8S44x_4Uhv4kGQIvGKUVA38yM_GmA&s",
    data: "Rps 641"
  },
  {
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDpeBBiqAckd643C9VEfaTJGB6p7SMMVY2w&s",
    data: "Rps 641"
  }
];

const Featured = () => {
    return (
        <div className='sub-section'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pt-3">
                <h2 className='main-heading lora font-bold text-center'>Featured Products</h2>
                      </div>
                      <div className="col-lg-12">
                <CardSlider  settings={settings} data={data} />
                          
                      </div>
            </div>
          </div>
        </div>
      );
}

export default Featured;
