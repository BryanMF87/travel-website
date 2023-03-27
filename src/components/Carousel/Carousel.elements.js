import styled from "styled-components";
import {HiUser} from 'react-icons/hi';

export const ArrowBtn = styled.button`
    position: absolute;
    z-index: 100;
    background: white;
    padding: .5rem .5rem .25rem .5rem;
    top: 50%;
    transform: translateY(-50%);

    :hover {
        background: var(--dark);
        color: white;
    }
`;

export const OuterContainer = styled.div`
    position: relative;
    width: 18.75rem;
    margin: 0 auto;

    button:first-of-type {
        left: -2.5%;
    }

    button:last-of-type {
        right: -2.5%;
    }

    @media screen and (min-width: 38.625rem) {
        width: 38.625rem;
    }

    @media screen and (min-width: 58.5rem) {
        width: 58.5rem;
    }
`;

export const CarouselContainer = styled.div`
    overflow: hidden;
    position: relative;
    height: 21.875rem;
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    transition: .5s ease;
`;

export const Card = styled.div`
    border: 0.125rem solid var(--dark);
    border-radius: 0.625rem;
    width: 18.75rem;
    height: 21.875rem;
    padding: 3rem 1rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    scroll-snap-align: center;

    h5, p {
        text-align: center;
    }
`;

export const Circle = styled.div`
    background: var(--dark);
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    margin: 0 auto .5rem auto;
    text-align: center;
`;

export const UserIcon = styled(HiUser)`
    color: white;
    margin-bottom: -5.75rem; 
`;