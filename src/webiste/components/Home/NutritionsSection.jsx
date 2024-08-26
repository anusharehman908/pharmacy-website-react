import React from 'react';
import './NutritionsSection.css'; // Import your CSS file

const NutritionsSection = () => {
  const items = [
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F08327.webp&w=256&q=50',
      alt: 'Nutrition 1',
      label: 'Product 1',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F03442.webp&w=256&q=50',
      alt: 'Nutrition 2',
      label: 'Product 2',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F14788.webp&w=256&q=50',
      alt: 'Nutrition 3',
      label: 'Product 3',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F08384.jpg&w=256&q=50',
      alt: 'Nutrition 4',
      label: 'Product 4',
    },

    {
        src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fglucerna-powder-vanilla-400g.webp&w=256&q=50',
        alt: 'Nutrition 5',
        label: 'Product 5',
      },

      {
        src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F14783.webp&w=256&q=50',
        alt: 'Nutrition 6',
        label: 'Product 6',
      },
  ];

  return (
    <section className="sub-section">
      <div className="container">
      <div className="col-light green-12 pt-3">
            <h2 className='main-heading font-bold text-center'>Nutritions & Supplements</h2>
          </div>
        
        <div className="image-grid">
          {items.map((item, index) => (
            <div key={index} className="image-item">
              <img src={item.src} alt={item.alt} className="image" />
              <div className="image-info">
                <p className="image-label">{item.label}</p>
                <button className="order-button">Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NutritionsSection;
