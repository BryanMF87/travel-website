import styled from 'styled-components';

export const AccordianUl = styled.ul`
    border-top: solid 2px var(--dark);
    margin-top: 4rem;
    transition: 4s;
`;

export const AccordianLi = styled.li`
    border-bottom: solid 2px var(--dark);
    display: flex;
    flex-direction: column;

    & :hover {
        background: var(--lightest);
    }

    button {
        border: none;
        font-weight: 400;
        border-radius: 0;
        background: none;
        transition: 0.4s;
        padding: 1.25rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    span {
        font-size: 1.5rem;
        line-height: .5rem;
        margin-top: .2rem;

    }

    div {
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;

        p {
            font-size: 0.875rem;
            line-height: 1rem;
            padding: 1.5rem;
        }
    }
`;