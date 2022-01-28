import React from 'react';
import Header from '../component/header';
import Navbar from '../component/Navbar';
import ImageSlider from '../component/ImageSlider';
import {SliderData} from '../component/SliderData';

const MainContant = () => {
    return(
        <div>
        <Header />
        <Navbar />
        <ImageSlider slides={SliderData} />
        </div>
    )
}
export default MainContant;