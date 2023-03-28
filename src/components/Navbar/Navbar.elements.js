import styled from 'styled-components';
import { MdMenu, MdClear } from 'react-icons/md';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: .5rem 0;
  color: #000;
  background: white;
  font-size: 1.15rem;
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 1rem 0 .5rem 0;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const NavIcon = styled(MdMenu)`
  color: var(--dark);
  width: 100%;

  &:hover {
    color: var(--lighter);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavIconClose = styled(MdClear)`
  color: var(--dark);
  width: 100%;

  &:hover {
    color: var(--lighter);
  }
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  background: white;
  width: 100%;
  overflow: hidden;
  font-size: 1.2rem;
  height: 0;
  padding: ${({menu}) => menu ? '8rem 0' : '0'};
  transition: 0.3s ease;

  @media screen and (min-width: 768px) {
    display: "flex";
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 1rem 0;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .5rem 0;
  text-align: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0 3rem;
  }
`;

export const NavLink = styled.li`
  color: var(--light);
  font-weight: 300;
  width: 90%;
  background: var(--crazyLight);
  border-radius: .5rem;
  display: flex;
  padding: .5rem .5rem .5rem 1rem;
  align-items: center;
  gap: .65rem;

      &:first-child {
        color: var(--dark);
        font-weight: 900;
      }

      &:hover {
        background: var(--lightest);
      }

      @media screen and (min-width: 768px) {
        background: none;

        & :first-child {
          display: none;
        }

        &:hover {
          color: var(--lighter);
        }
      }
`;
