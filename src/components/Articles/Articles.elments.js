import styled from 'styled-components';

export const ArticleList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 7rem 1rem;
    box-sizing: content-box;
    background: white;
    position: relative;
    z-index: 75;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 3rem;
    }
`;


export const Story = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center center;
    }

    span {
        width: 2.5rem;
        height: .15rem;
        background: var(--dark);
    }

    h4 {
        max-width: 15rem;
    }

    @media screen and (min-width: 768px) {
        img {
            height: 12rem;
        }
    }
`;