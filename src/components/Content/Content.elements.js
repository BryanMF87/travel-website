import styled from 'styled-components';
import arrow from '../../images/arrow.png';

export const Hero = styled.div`
    padding: 0 0 4rem 0;
    z-index: 1;
    position: relative;
`;

export const HeroInfo = styled.div`

    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
    position: relative;
    z-index: 50;

    div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    p {
        text-align: center;
        max-width: 35rem;
    }

    button {
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {

        p, h2 {
            text-align: left;
        }

        button {
            margin: 0;
        } 
    }

    @media screen and (min-width: 887px) {
        flex-direction: row;
        align-items: stretch;
        padding: 6rem 0;
        gap: 3rem;

        div {
            width: 44%;
        }

        img {
            display: block;
            width: 56%;
            flex-basis: auto;
            object-fit: cover;
        }
    }
`;

export const DarkSection = styled.div`
    background: var(--dark);
    color: white;
    text-align: center;
    padding: 2.5rem 1rem 3rem 1rem;
    position: relative;
    z-index: 20;

    div {
        position: relative;
        max-width: 28rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 99;
        background-color: var(--dark);
    }

    button {
        margin-top: 1rem;
    }

    p {
        text-align: center; /* override global p align justify */
    }
`;

export const ArticleSection = styled.div`
    position: relative;
`;

export const SeePlaces = styled.div`
    text-align: center;
    margin: 8rem 0 15rem 0;
    position: relative;

    p {
        text-align: center; /* override global p align justify */
        margin-top: 2rem;
        font-weight: 900;
    }
`;

export const AirplaneIcon = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 0 auto 2rem auto;
`;

export const MountainInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    position: relative;
    z-index: 60;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 1.5rem;
        align-items: stretch;
    }
`;

export const MiLeftContent = styled.img`

    @media screen and (min-width: 768px) {
        width: 47%;
        height: auto;
        object-fit: cover;
    }
`;

export const MiRightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
        display: none;
    }

    button {
        width: 8rem;
        height: 3rem;
        background: #fff url(${arrow});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        border: none;

        & :hover {
            opacity: 50%;
        }
    }

    @media screen and (min-width: 768px) {
        width: 53%;

        img:first-child {
            display: block;
            width: 70%;
            height: auto;
            object-fit: contain;
        }

        button {
            align-self: flex-end;
            margin: 2rem 0;

            &:hover {
                opacity: 50%;
                cursor: pointer;
            }
        }
    }
`;

export const MiText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        gap: 1rem;

        h4 {
            text-decoration: underline;
            text-decoration-thickness: .075rem;
            text-underline-offset: .2rem;
            line-height: 2.25rem;
        }

        div {
            
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    @media screen and (min-width: 870px) {
        flex-direction: row;
    }
`;

export const DarkSection2 = styled.div`
    background: var(--dark);
    color: white;
    position: relative;
    display: flex;
    flex-direction: column-reverse;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column-reverse;
        padding: 0;
    }

    & div > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 3rem 1.25rem 4rem 1.25rem;
    }

    h3 {
        max-width: 30rem;
        margin-bottom: 1rem;
    }

    h5 {
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

        & > div:nth-of-type(1) {
            flex-direction: row;
            gap: 3rem;
            position: relative;
            padding: 8rem 0 8rem 2rem; 
        }

        & div > div:nth-of-type(1) {
            max-width: 45%;
            padding: 0;
            margin: 0;
        }
        
        h3 {
            margin-bottom: 2rem;
        }
    }
`;

export const ImgFloatRight = styled.img`
    box-sizing: content-box;
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: 768px) {
        position: absolute;
        width: 45%;
        height: 65%;
        object-fit: cover;
        object-position: right;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 4rem 0;

    h2 {
        margin-top: 2rem;
        text-align: center;
    }

    img {
        max-height: 30rem;
        object-fit: cover;
        object-position: bottom;
    }

    @media screen and (min-width: 640px) {
        h2 {
            text-align: left;
        }

        img {
            object-position: center;
        }
    }

    @media screen and (min-width: 885px) {
        flex-direction: row;
        gap: 3.5rem;
        padding: 8rem 0;

        h2 {
            margin: 0;
        }

        img {
            width: 33.5%;
            object-fit: cover;
        }
    }
`;

export const ReviewSection = styled.div`
    position: relative;
    z-index: 10;
    padding: 8rem 0;

    h2 {
        max-width: 30rem;
        text-align: center;
        margin: 0 auto 2rem auto;
    }

`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 4rem 0 8rem 0;
    gap: 2.5rem;

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
    }

    input {
        width: 100%;
        border: 2px solid var(--dark);
        border-radius: .25rem;
        padding: .5rem 1rem;
        font-weight: 400;
        color: var(--dark);

        :hover {
            background: var(--lightest);
            cursor: pointer;
        }
    }

    & ::placeholder {
        color: var(--dark);
    }

    textarea {
        border: 2px solid var(--dark);
        border-radius: .25rem;
        padding: .5rem 1rem;

        :hover {
            background: var(--lightest);
            cursor: pointer;
        }
    }

    button {
        font-weight: 400;
        font-size: 1rem;
        width: 100%;
        margin-top: 2rem;
    }

    img {
            width: 100%;
            object-fit: cover;
        }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 3.5rem;

        h2 {
            text-align: left;
        }

        div {
            width: 45%;
        }

        img {
            width: 55%;
        }
    }

    @media screen and (min-width: 1024px) {
        button {
            max-width: 15rem;
            padding: .5rem 0;
            margin-top: 2rem;
        }
    }
`;