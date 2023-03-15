import React, { useState } from  'react';

const ProductList = (props) => {
    const { product } = props;

    return (
        <ul>
            {
                product.map( (item, index) => 
                    <li key={index}>{item}</li>
                )
            }
        </ul>
    );
}

export default ProductList;

