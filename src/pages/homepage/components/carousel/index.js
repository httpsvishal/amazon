import React from 'react';
import data from '../../../../AMAZON DATA/carousel/carousal-main.json';


const Carousel = ()=>{
    return(
        <div className="carousel">
            {data.map((item, index) => {
                return(
                    <img src={item.src} alt={item.title} key={index}/>
                )
            })}
        </div>
    )
} 

export default Carousel;