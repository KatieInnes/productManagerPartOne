import React, { useState } from  'react';
    
const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const createProduct = (e) => {
        e.preventDefault();
        
        const newProduct = { title, price, description };
        console.log("Now viewing", newProduct);
            setTitle("");
            setPrice("");
            setDescription("");
    };
    
    return(
        <>
        <h1>Product Manager</h1>
        <form onSubmit={ createProduct }>
            <div class="mb-3">
                <label>Title: </label> 
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } />
            </div>
            <div class="mb-3">
                <label>Price: </label> 
                <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) } />
            </div>
            <div class="mb-3">
                <label>Description: </label> 
                <input type="text" value={description} onChange={ (e) => setDescription(e.target.value) } />
            </div>
            <input type = "submit" value = "Create" />
        </form>
        </>

    );
};
    
export default ProductForm;