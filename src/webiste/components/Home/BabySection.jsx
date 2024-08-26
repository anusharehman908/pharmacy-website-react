import React from 'react';
import './BabySection.css';

const BabySection = () => {
  const items = [
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F09607.jpg&w=256&q=50',
      alt: 'Baby Product 1',
      title: 'Baby Milk',
      description: 'Gentle and nourishing baby lotion.',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F20688.jpg&w=256&q=50',
      alt: 'Baby Product 2',
      title: 'Baby Milk',
      description: 'Tear-free shampoo for your baby.',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F09360-1.jpg&w=256&q=50',
      alt: 'Baby Product 3',
      title: 'Baby Wipes',
      description: 'Soft and sensitive baby wipes.',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fjohnson-baby-oil-reg-125ml.webp&w=256&q=50',
      alt: 'Baby Product 4',
      title: 'Baby Lotion',
      description: 'Smooth and soothing baby powder.',
    },
    
  ];

  return (
    <section className="sub-section">
      <div className="container">
      <div className="row">
      <div className="col-light green-12 pt-3">
            <h2 className='main-heading font-bold text-center'>Baby & Mother Care</h2>
          </div>
       
        <div className="product-grid py-5">
          {items.map((item, index) => (
            <div key={index} className="product-item">
              <div style={{ height:'150px' , width:'100px'}} className='d-flex align-items-center justify-content-center'>
              <img src={item.src} alt={item.alt} className="product-image img-fluid" />
              </div>
             
              <h3 className="product-title">{item.title}</h3>
              <p className="product-description">{item.description}</p>
              <button className="shop-button">Shop Now</button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default BabySection;
