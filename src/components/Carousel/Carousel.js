import React, {useState, useRef} from 'react';
import {OuterContainer, CarouselContainer, CardContainer} from './Carousel.elements';
import {Card, Circle, UserIcon, ArrowBtn} from './Carousel.elements';
import {HiOutlineArrowLeft, HiOutlineArrowRight} from 'react-icons/hi';

const cards = [
    { 
        id: 1,
        customer: "Customer Name",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua."
    },
    { 
        id: 2,
        customer: "Customer Name",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua."
    },
    { 
        id: 3,
        customer: "Customer Name",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua."
    },
    { 
        id: 4,
        customer: "Customer Name",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua."
    },
    { 
        id: 5,
        customer: "Customer Name",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua."
    }
];

export const Carousel = () => {

    const [currentCard, setCurrentCard] = useState(0);
    const numCards = cards.length;
    const cardContainerRef = useRef(null);
    
    const prevCard = () => {
        const newPosition = currentCard === 0 ? numCards - 1 : currentCard - 1;
        setCurrentCard(newPosition);
        const newPositionPx = newPosition * -19.75;
        cardContainerRef.current.style.transform = `translateX(${newPositionPx}rem)`;
    };

    const nextCard = () => {
        const newPosition = currentCard === numCards - 1 ? 0 : currentCard + 1;
        setCurrentCard(newPosition);
        const newPositionPx = newPosition * -19.75;
        cardContainerRef.current.style.transform = `translateX(${newPositionPx}rem)`;
    }; 

    return (
        <OuterContainer>
            <ArrowBtn onClick={prevCard}>
               <HiOutlineArrowLeft size={'2rem'}/>
            </ArrowBtn>
            <CarouselContainer>
                <CardContainer ref={cardContainerRef}>
                    {cards.map((review, index) => (
                        <Card key={review.id} active={index === currentCard}>
                            <Circle>
                                <UserIcon size={"6rem"}/>
                            </Circle>
                            <h5>{review.customer}</h5>
                            <p>{review.review}</p>
                        </Card>
                    ))}
                    {cards.map((review, index) => (
                        <Card key={review.id} active={index === currentCard}>
                            <Circle>
                                <UserIcon size={"6rem"}/>
                            </Circle>
                            <h5>{review.customer}</h5>
                            <p>{review.review}</p>
                        </Card>
                    ))}
                </CardContainer>
            </CarouselContainer>
            <ArrowBtn onClick={nextCard}>
                <HiOutlineArrowRight size={'2rem'}/>
            </ArrowBtn>
        </OuterContainer>
    )
};