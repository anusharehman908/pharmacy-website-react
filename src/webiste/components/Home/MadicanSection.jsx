import React from 'react';
import './MadicanSection.css';

const MadicanSection = () => {
  const images = [
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F05405.webp&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fpanadol-extra-tablets-100s.webp&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F05283.webp&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F11179.jpg&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F23738.jpg&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F04942.webp&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F14787.webp&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F05678.jpg&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F07683.webp&w=256&q=50',
    'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F565%2F06823.webp&w=256&q=50',
  ];

  return (
    <section className="madican-section">
      <h2 className="madican-heading">Madican Section</h2>
      <div className="madican-container">
        {images.map((image, index) => (
          <div key={index} className="madican-card">
            <img src={image} alt={`Madican ${index + 1}`} className="madican-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MadicanSection;
