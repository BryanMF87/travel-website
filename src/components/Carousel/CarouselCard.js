import React from 'react';
import {Card, Circle, UserIcon} from './Carousel.elements';

export const CarouselCard = () => {
  return (
    <Card>
        <Circle>
            <UserIcon size={"6rem"}/>
        </Circle>
        <h5>Customer Name</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua.</p>
    </Card>
  )
}