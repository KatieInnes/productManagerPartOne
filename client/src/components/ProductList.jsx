import React, {useState, useEffect} from 'react'
import axios from 'axios';

const ProductList = (props) => {
    const { product, setProduct } = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
        .then((res)=>{
        console.log(res.data);
            setPeople(res.data);
    })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <ul>
            {
                product.map( (product, index) => 
                    <li key={index}>{product}</li>
                )
            }
        </ul>
    );
}

export default ProductList;