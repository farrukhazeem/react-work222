import React from 'react';
import Slider from 'react-slick';


const settings ={
    dots: true,
    arrows: false,
    accessibility:true,
    infinte:true,
    speed:500,
    slidesToShow:1,
    slidesToScoll:1,
    autoplay:true,
    autoplaySpeed: 2000
}

const generateSlides= ({slides})=>{
  if(slides){
      return(
          <Slider{...settings}>
         {slides.map((item)=>{
             return(
                 <div key={item.id} className="item-slider"
                    style={{background:`url(/images/covers/${item.cover})`}}
                  >
                    <div className="caption">
                        <h4> {item.topic}</h4>
                        <p>{item.title}</p>
                     </div>
                     </div>
             )
         }
         )}       
              </Slider>
      )
  }
}

const Featured = (props)=> {

return (
    <div>
        {generateSlides(props)}
        </div>
)
}

export default Featured;