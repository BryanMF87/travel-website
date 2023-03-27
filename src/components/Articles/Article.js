import React from 'react';
import {Story} from './Articles.elments';

export const Article = ({image, alt, header, paragraph}) => {

    return (
        <Story>
            <img 
                src={image}
                alt={alt}
            />
            <span className="line"></span>
            <h4>{header}</h4>
            <p>{paragraph}</p>
        </Story>
    )
}