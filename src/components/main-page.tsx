import React from 'react';
import {CategoryCard} from './category-card';
import cards from '../cards';

function MainPage(): JSX.Element {
    return (
        <div className="wrap-cards">
            <div className='main cards'>
                {
                    cards.map(card => (
                        <CategoryCard
                            categ={card.displayName}
                            imgPath={card.categoryImage}
                            linkPath={card.category}
                            key={card.category}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default MainPage;
