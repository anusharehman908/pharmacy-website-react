import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './Catagories.css';


const StyledSlider = styled.div`
  border-radius: 10px;

`;

const Image = styled.img`
  width: 250px;

  margin: auto;
  border-radius: 10px 10px 0 0;
  transition: padding-bottom 0.3s ease-in-out;
`;
const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #0177ff;
  margin-top: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease-in-out;
`;

const StyledArrow = styled.div`
color: #ffffff;
background-color: #0177ff;
padding:1px 10px 1px 10px;
border-radius: 50%;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: -15px;
left:50%;
transform: translateX(-50%);
opacity: 0;
  
`;
const Card = styled.div`
  padding: 5px ;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: ${({ isClicked }) => (isClicked ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};
  outline: none;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 0.3s all ease-in; 
  }
  &:hover ${Image} {
    padding-bottom: 2em;
  }
  &:hover ${CardTitle}{
   transform:translateY(-40px);
  }
  &:hover ${StyledArrow}{
    opacity: 1;
  }

`;


const CardSlider = ({ settings, data }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div className="slider-container overflow-hidden">
      <StyledSlider>
      <Slider {...settings}>
          {data.map((item, index) => (
            <Card
              key={index}
              isClicked={index === clickedIndex}
              onClick={() => handleCardClick(index)}
            >
              <Image src={item.images} alt={item.data} />
              <CardTitle>{item.data}</CardTitle>
           
           <StyledArrow>></StyledArrow>
            </Card>
          ))}
        </Slider>
      </StyledSlider>
    </div>
  );
};

export default CardSlider;
