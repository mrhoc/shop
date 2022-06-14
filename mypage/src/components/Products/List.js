import React from 'react';
import { productContext } from '../providers/ProductProvider';
import {useContext} from 'react'
import Product from './Product';

const ListProducts = () => {
    const {products}=useContext(productContext)

    return (
        <>
            {products.map((product) => (
                <Product product={product}></Product>
            ))}
        </>
    );
}

export default ListProducts;
