import React from 'react';
import './Brand.css';

const brandData = [
  {
    name: "Brand One",
    logo: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FManualPrescriptions%2FMother%2520App%2520Banner.jpg&w=1400&q=75"
  },
  {
    name: "Brand Two",
    logo: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FBanners%2F47cf8d4e60c448558b53da8f786f230apngfile.png&w=256&q=75"
  },
  {
    name: "Brand Three",
    logo: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FBanners%2Ff969d8af947344ab93c0e2b735b0d372pngfile.png&w=256&q=75"
  }
];

const Brand = () => {
  return (
    <div className="brand-section">
      <div className="container">
        <div className="row">
          <h3 className='main-heading text-center'>BRANDS</h3>
          {brandData.map((brand, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="brand-item">
                <div className="brand-logo">
                  <img src={brand.logo} alt={brand.name} className="circle-img" />
                </div>
                <h3 className="brand-name">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
