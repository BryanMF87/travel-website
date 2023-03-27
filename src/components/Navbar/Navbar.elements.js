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
  padding: 1rem 0 2rem 0;

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
  height: 0;
  padding: ${({menu}) => menu ? '7rem 0' : '0'};
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
  gap: .75rem 0;
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

      &:first-child {
        color: var(--dark);
        font-weight: 900;
      }

      &:hover {
          color: var(--lighter);
      }
`;
