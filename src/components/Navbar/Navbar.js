import React, {useState, useEffect} from 'react';
import {WhiteButton} from '../../globalStyles';
import {Nav, NavIcon, NavMenu, NavLinks, NavLink} from "../Navbar/Navbar.elements";
import {FaMountain, FaMapMarkedAlt, FaHiking} from 'react-icons/fa';
import {MdFlight} from 'react-icons/md';

const Navbar = () => { 

    const [menu, setMenu] = useState(false);

    useEffect(()=> {
        console.log(menu)
    }, [menu])

    return (
        <Nav>
            <NavIcon size={"2rem"} onClick={() => setMenu(!menu)} />
            <NavMenu menu={menu}>
                <NavLinks>
                <NavLink><FaMountain/> Home</NavLink>
                <NavLink><FaMapMarkedAlt/> Guide</NavLink>
                <NavLink><MdFlight size={"1.35rem"}/> Flights</NavLink>
                <NavLink><FaHiking/> About</NavLink>
                </NavLinks>
                <WhiteButton>Contact Us</WhiteButton>
            </NavMenu>
        </Nav>
    )
}

export default Navbar