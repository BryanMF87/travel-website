import styled from "styled-components";


export const HeroScribbleLeft = styled.img`
    width: 500px;
    position: absolute;
    bottom: -17rem;
    left: 0;
    z-index: 1;
    object-fit: contain;

    @media screen and (min-width: 768px) {
    }
`;

export const HeroScribbleRight = styled.img`
    position: absolute;
    bottom: -3.75rem;
    right: 0;
    display: none;
    z-index: 3;
    width: 100px;
    object-fit: contain;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

export const WhiteScribbleLeft = styled.img`
    position: absolute;
    z-index: 0;
    width: 335px;
    left: 0;
    top: 40px;
`; 

export const WhiteScribbleRight = styled.img`
    position: absolute;
    z-index: 0;
    width: 335px;
    right: 0;
    bottom: 40px;
`;

export const ArticlesScribbleLeft = styled.img`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 37px;
    object-fit: contain;
`;

export const ArticlesScribbleRight = styled.img`
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: 0;
    width: 60px;
    object-fit: contain;
`;

export const GreyScribbleBottom = styled.img`
    position: absolute;
    z-index: 0;
    top: -5rem;
    right: 0;
    width: 200px;
    object-fit: contain;
`;

export const AirplaneScribble = styled.img`
    position: absolute;
    z-index: 0;
    bottom: -5rem;
    margin-left: -25rem;
    width: 300px;
    object-fit: contain;
`;

export const Tape = styled.img`
    display: none;
    position: absolute;
    z-index: 66;
    width: auto;
    height: 13rem;
    top: 15%;
    left: -1.5rem;

    @media screen and (min-width: 600px) {
        display: block;
    }

    @media screen and (min-width: 768px) {
        top: 15rem;
    }
`;

export const ScribbleWhiteLarge = styled.img`
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0rem;
    width: 275px;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

export const ReviewsScribbleLeft = styled.img`
    position: absolute;
    left: 0;
    margin-top: -7rem;
    width: 200px;
    object-fit: contain;

    @media screen and (min-width: 768px) {
        margin-top: -1rem;
    }
`;

export const ReviewsScribbleRight = styled.img`
    position: absolute;
    bottom: 4rem;
    right: 0;
    width: 200px;
    object-fit: contain;
`;