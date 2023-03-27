import React from 'react';
import {Article} from './Article';
import {ArticleList} from './Articles.elments';

import hiker from '../../images/hiker.png';
import mountains2 from '../../images/mountains2.png';
import sittingHiker from '../../images/article-3.png';

const artData = [
    {
        id: 0,
        image: hiker,
        alt: 'story 1',
        header: 'Lorem ipsum dolor sit amet',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.'
    },
    {
        id: 1,
        image: mountains2,
        alt: 'story 2',
        header: 'Lorem ipsum dolor sit amet',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.'
    },
    {
        id: 2,
        image: sittingHiker,
        alt: 'story 3',
        header: 'Lorem ipsum dolor sit amet',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.'
    },
]

export const Articles = () => {

  return (
    <ArticleList>
        {artData.map((item) => (
            <Article
                key={item.id}
                image={item.image}
                alt={item.alt}
                header={item.header}
                paragraph={item.paragraph}
            />
        ))}
    </ArticleList>
  )
}