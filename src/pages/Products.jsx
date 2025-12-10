import { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

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
                        <p>Loading...</p> :
                        <div>
                            <ul>
                                {
                                    productList.map((product) => {
                                        return (
                                            <li key={product.id}>
                                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                }
            </div>
        </>
    )
}

export default Products;