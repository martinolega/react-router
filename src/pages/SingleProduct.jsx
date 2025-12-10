import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function SingleProduct() {
    const apiLink = "https://fakestoreapi.com/products";
    const { id } = useParams();
    const { navigate } = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`${apiLink}/${id}`)
            .then((resp) => {
                setProduct(resp.data);
            })
    }, [id]);

    return (
        <>
            {
                    product !== null && product.id ? (
                    <div className="container">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.price}€</p>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                        <img className="img-size" src={product.image} alt={product.title} />
                        <p>{product.rating.count} reviews with an average of {product.rating.rate}</p>
                    </div>
                    ) :
                    (
                    <div className="container">
                        <p>Errore! Prodotto non esistente</p>
                    </div>
                    )
            }
        </>
    )
}

export default SingleProduct;