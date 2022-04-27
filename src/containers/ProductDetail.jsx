import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product)

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => console.log("Err ", err));

        dispatch(SelectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
    }, [productId])
    return (
        <div>
            <h1>ProductDetail</h1>
        </div>
    )
};

export default ProductDetail;