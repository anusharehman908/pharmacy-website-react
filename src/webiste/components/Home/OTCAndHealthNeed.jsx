import React from 'react';
import './OTCAndHealthNeed.css';

const OTCAndHealthNeed = () => {
  const items = [
    { id: 1,
         image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F07107.webp&w=256&q=50',
          name: 'OTC Product 1' },
    { id: 2, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F12237-1.jpg&w=256&q=50',
         name: 'OTC Product 2' },
    { id: 3, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F07570.webp&w=256&q=50', 
        name: 'OTC Product 3' },
    { id: 4, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F13074-1.jpg&w=256&q=50', 
        name: 'OTC Product 4' },
   
  ];

  return (
    <section className="sub-section">
       <div className=" container">
      <div className="col-light green-12 pt-3">
            <h2 className='main-heading font-bold text-center'>OTC And Health Need</h2>
          </div>
   
     <div className='otc-container py-5'>

    
        {items.map((item) => (
          <div key={item.id} className="otc-card">
            <img src={item.image} alt={item.name} className="otc-image" />
            <h3 className="otc-name">{item.name}</h3>
            <button className="otc-order-button">Order Now</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default OTCAndHealthNeed;
