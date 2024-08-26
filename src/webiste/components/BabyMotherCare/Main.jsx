import React from 'react'
import  './Main.css'
const Main = () => {
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
    <div className='container py-5'>
<ul class="nav nav-tabs border-0" id="myTab" role="tablist">
  <li class="nav-item border rounded" role="presentation">
    <button class="nav-link  fw-normal" id="babyAppliances" data-bs-toggle="tab" data-bs-target="#babyAppliances" type="button" role="tab" aria-controls="babyAppliances" aria-selected="true">Baby Appliances</button>
  </li>
  <li class="nav-item border rounded" role="presentation">
    <button class="nav-link fw-normal" id="babyBath" data-bs-toggle="tab" data-bs-target="#babyBath" type="button" role="tab" aria-controls="babyBath" aria-selected="false">Baby Bath & Body</button>
  </li>
  <li class="nav-item border rounded" role="presentation">
    <button class="nav-link fw-normal" id="babyDiapers" data-bs-toggle="tab" data-bs-target="#babyDiapers" type="button" role="tab" aria-controls="babyDiapers" aria-selected="false">Baby Diapers & Wipes</button>
  </li>
  <li class="nav-item border rounded" role="presentation">
    <button class="nav-link fw-normal" id="babyDiapers" data-bs-toggle="tab" data-bs-target="#babyCreams" type="button" role="tab" aria-controls="babyCreams" aria-selected="false">Baby Creams & Lotions</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="babyAppliances" role="tabpanel" aria-labelledby="babyAppliances">


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
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="babyBath">fs</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="babyDiapers">dsfsd</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="babyCreams">dsfsd</div>
</div>
    </div>
  )
}

export default Main
