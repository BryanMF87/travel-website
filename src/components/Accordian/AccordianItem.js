import React from 'react';
import { AccordianLi } from './Accordian.elements';

export const AccordianItem = () => {

    const handleClick = (event) => {
        let panel = event.target.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    };

    return (
        <AccordianLi>
            <button onClick={handleClick}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod<span>+</span></button>
            <div> {/* panel */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </AccordianLi>
    )
};