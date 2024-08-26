import React from 'react';
import CardSlider from './CardSlider'; // Ensure you have a CardSlider component

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const data = [
    {
        images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F03206.png&w=256&q=50",
        data: "Deal 1 - 20% Off"
    },
    {
        images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fenfamil-a-stage-1-800g.webp&w=256&q=50",
        data: "Deal 2 - Buy One Get One Free"
    },
    {
        images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F24372.webp&w=256&q=50",
        data: "Deal 3 - 30% Off on Select Items"
    },

    {
        images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fenfamil-a-stage-2-800g.webp&w=256&q=50",
        data: "Enfamil A+ Stage 2 Milk Powder 760G"
    },

    {
        images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F18404.jpg&w=256&q=50",
        data: "Deal 3 - 30% Off on Select Items"
    },
    {
        images: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F03189.jpg&w=256&q=50",
        data: "Deal 4 - Free Shipping"
    }
];

const Deal = () => {
    return (
        <div className='deal-section overflow-hidden'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-3">
                        <h2 className='main-heading text-center'>Special Deals</h2>
                    </div>
                    <div className="col-lg-12">
                        <CardSlider settings={settings} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deal;
