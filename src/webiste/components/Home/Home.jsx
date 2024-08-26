import React from 'react'
import Header from './Header'
import Footer from './Footer'

import './website.css'
import Slider from './Slider'

import Catagories from './Catagories'
import Featured from './Featured'
import TopSellingItems from './Top Selling Items'
import Deal from './Deal'
import BlogPost from './BlogPost'

import Brand from './Brand'

import BabySection from './BabySection'
import NutritionsSection from './NutritionsSection'
import MadicanSection from './MadicanSection'
import OTCAndHealthNeed from './OTCAndHealthNeed'
import {  Router, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      
    
    
         <Slider /> 
  
        <Catagories />
        {/* <Featured/> */}
        <TopSellingItems/>
        {/* <Deal/>  */}
       <BlogPost/> 
  {/* <Brand/> */}
  <BabySection/>
<NutritionsSection/>
{/* <MadicanSection/> */}
<OTCAndHealthNeed/>
   
        
  
    </div>
  )
}

export default Home
