import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { SetProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch(); 

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
        dispatch(SetProducts(response.data));
    };
    
    useEffect(()=>{
        fetchProducts();
    }, [])

    return (
        <div className="ui four centered column grid">
            <ProductComponent />
        </div>
    )
};

export default ProductListing