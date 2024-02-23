import React from 'react';

const products = ( { title, description, image, name, link } ) => {
    return (
        <>
            <div className="product-item">
                <img src={ image } alt={ title } />
                <div className="product-content">
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                </div>
            </div>
        </>
    );
};

export default products;