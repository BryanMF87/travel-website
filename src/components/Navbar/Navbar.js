import React, {useState, useEffect} from 'react';
import {WhiteButton} from '../../globalStyles';
import {Nav, NavIcon, NavMenu, NavLinks, NavLink} from "../Navbar/Navbar.elements";

const Navbar = () => { 

    const [menu, setMenu] = useState(false);

    useEffect(()=> {
        console.log(menu)
    }, [menu])

    return (
        <Nav>
            <NavIcon size={"1.5rem"} onClick={() => setMenu(!menu)} />
            <NavMenu menu={menu}>
                <NavLinks>
                <NavLink>Home</NavLink>
                <NavLink>Guide</NavLink>
                <NavLink>Flights</NavLink>
                <NavLink>About</NavLink>
                </NavLinks>
                <WhiteButton>Contact Us</WhiteButton>
            </NavMenu>
        </Nav>
    )
}

export default Navbar