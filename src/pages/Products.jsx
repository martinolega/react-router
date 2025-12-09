import { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from '../components/Product';


function Products() {
    const apiLink = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        setLoading(true);
        axios
            .get(apiLink)
            .then((resp) => {
                setProductList(resp.data);
            });
        setLoading(false);
    }

    return (
        <>
            <div className="container">
                <h1>Products</h1>
                {
                    loading === true ?
                        (
                            <div className="text-center">Loading...</div>
                        ) :
                        (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                                {
                                    productList.map((product, index) => {
                                        return (
                                            <div className="col d-flex" key={index}>
                                                <Product product={product} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Products;