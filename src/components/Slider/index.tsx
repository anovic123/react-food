import React from 'react';
import Carousel from "nuka-carousel";

import { useSelector } from 'react-redux';
import { selectProductData } from '../../redux/product/selectors';
import { ErrorMessage } from '../'

// @ts-ignore
import slider01 from '../../assets/img/01.jpg'
// @ts-ignore
import slider02 from '../../assets/img/02.jpg'
// @ts-ignore
import slider03 from '../../assets/img/03.jpg'

const Slider: React.FC = () => {
  const { status } = useSelector(selectProductData)
  return (
    <Carousel
        className="slider"
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
        }}
    >
      <img 
      className="slider__image"
      src={slider01}
      alt="slider image"
      />
      <img 
      className="slider__image"
      src={slider02}
      alt="slider image"
      />
      <img 
      className="slider__image"
      src={slider03}
      alt="slider image"
      />
    </Carousel>
  )}

export default Slider;