import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addProductCart } from "../redux/actions/cart";

import { ProductInfo } from "../components/Product/ProductInfo";
import { ProductAbout } from "../components/Product/ProductAbout";

export const Product = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cart }) => cart.items);

    useEffect(() => {
        const fetchOneProduct = async () => {
            const resp = await fetch(`http://localhost:3000/api/product/${id}`);
            const data = await resp.json();
            setProduct(data);
            console.log(data);
        };
        fetchOneProduct();
    }, [id]);

    const handleAddProductToCart = (obj) => {
        dispatch({
            type: "ADD_PRODUCT_CART",
            payload: obj,
        });
    };

    console.log(product);

    return (
        <div>
            {product && (
                <ProductInfo
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    product_size={product.product_size}
                    addProductToCart={handleAddProductToCart}
                    key={product.id}
                    addedCount={
                        cartItems[product.id] &&
                        cartItems[product.id].items.length
                    }
                    {...product}
                />
            )}
            <ProductAbout
                description={product.description}
                details={product.details}
            />
        </div>
    );
};
