import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --dark: #232323;
        --light: #515155;
        --lighter: #c4c4c4;
        --lightest: #e5e5e5;
        --crazyLight: #f1f1f1;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        max-width: 100%;
        
    }

    body {
        color: var(--dark);
        font-family: 'Lato', sans-serif;
        min-width: 100%;
    }

    h1, h2, h3, h4 {
        font-family: 'Cardo', serif;
    }

    h1 {
        font-size: 4.25rem;
        line-height: 4.25rem;
        max-width: 40rem;
        margin: 0 auto;

        em {
            text-decoration: underline;
            text-decoration-thickness: .25rem;
            text-underline-offset: .75rem;
        }
    }

    h2 {
        font-size: 3.75rem;
        line-height: 3.75rem;
    }

    h3 {
        font-size: 3.12rem;
        line-height: 3.12rem;
    }

    h4 {
        font-size: 1.75rem;
        line-height: 1.75rem;
    }

    h5 {
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        line-height: 1rem;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
    }

    li {
        list-style-type: none;
        cursor: pointer;
    }

    button {
        padding: .75rem 2rem;
        cursor: pointer;
        font-weight: 900;
        border-radius: .25rem;
        width: 100%;

        @media screen and (min-width: 768px) {
            width: fit-content;
            padding: .5rem 1rem;
        }
    }
`;


    export const Container = styled.div`
        z-index: 1;
        max-width: 62.5rem;
        margin: 0 auto;
        padding: 0 1rem;

        @media screen and (min-width: 768px) {
            padding: 0 2rem;
        }
    `;

    export const WhiteButton = styled.button`
        background: white;
        color: var(--dark);
        border: .1rem solid var(--dark);
        background: white;
        margin: 0 auto;
        width: 90%;
        font-size: 1rem;

        &:hover {
            background: var(--dark);
            color: white;
        }

        @media screen and (min-width: 768px) {
            width: fit-content;
            margin: initial;
        }
    `;

    export const DarkButton = styled.button`
    background: var(--dark);
    color: white;
    border: .1rem solid var(--dark);
    width: 90%;

        &:hover {
            background: white;
            color: var(--dark);
        }

        @media screen and (min-width: 768px) {
            width: fit-content;
            margin: initial;
        }
    `;

    export const DarkButtonAlt = styled(DarkButton)`
    border: .1rem solid white;
    margin: 0 auto;

        &:hover {
            background: white;
            color: var(--dark);
        }
    `;

export default GlobalStyle