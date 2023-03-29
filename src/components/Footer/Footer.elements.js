import styled from "styled-components";

export const Section = styled.div`
    background: var(--lighter);
    padding: 6rem 0;
    position: relative;

    P {
        text-align: center;
    }

    img {
        display: none; 
    }

    @media screen and (min-width: 768px) {
        img {
            display: block;
            width: 250px;
            object-fit: contain;
            position: absolute;
            left: 0;
            bottom: 1rem;
        }
    }

    @media screen and (min-width: 1000px) {
        img {
            width: 300px;
            bottom: 2rem;
        }
    }
`;

export const Info = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 4rem;
        justify-content: space-between;
        margin-bottom: 6rem;

        & :first-child {
            width: 30%;
        }
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    li:hover {
        color: var(--light);
    }

    @media screen and (min-width: 901px) {
        ul {
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;