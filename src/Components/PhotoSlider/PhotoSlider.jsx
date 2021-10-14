import React from 'react';
import s from './PhotoSlider.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image2 from '../../common/img/img2.jpg';
import image3 from '../../common/img/img3.jpg';
import image4 from '../../common/img/img4.jpg';
import image5 from '../../common/img/img5.jpg';
import PhotoSliderImg from "./PhotoSliderImg";






let PhotoSlider = (props) => {
    debugger
    return (

        <div className={s.photoSlider}>
           <AliceCarousel>
               <PhotoSliderImg />
               <PhotoSliderImg />
               <PhotoSliderImg />
               <PhotoSliderImg />
               <img src={image2} className="sliderimg" alt=""/>
               <img src={image3} className="sliderimg" alt=""/>
               <img src={image4} className="sliderimg" alt=""/>
            </AliceCarousel>
        </div>
    );
}


export default PhotoSlider;