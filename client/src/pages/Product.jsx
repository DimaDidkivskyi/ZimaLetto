import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductInfo } from "../components/Product/ProductInfo";
import { ProductAbout } from "../components/Product/ProductAbout";

export const Product = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchOneProduct = async () => {
            const resp = await fetch(`http://localhost:3000/api/product/${id}`);
            const data = await resp.json();
            setProduct(data);
            console.log(data);
        };
        fetchOneProduct();
    }, []);

    return (
        <div>
            <ProductInfo
                name={product.name}
                image={product.image}
                price={product.price}
            />
            <ProductAbout
                description={product.description}
                details={product.details}
            />
        </div>
    );
};
