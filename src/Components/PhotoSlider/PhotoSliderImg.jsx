import React from "react";
import {photosArray} from "../../common/img/photoArray";
import PhotoSlider from "./PhotoSlider";
import s from "../Dialogs/Dialogs.module.css";

const ImageSlider = (props) => {

    return (
        <div>
            <div>
                <img src={props.img1} className="sliderimg" alt=""/>
            </div>

        </div>

    )
}

 let PhotoSliderImg = () => photosArray.map(i => <ImageSlider  img1={i.img1}
                                                              img2={i.img2}/>);

export default PhotoSliderImg;
