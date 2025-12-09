
function Product({product})
{
    const {title, price, description, category, image, rating} = product;

    return(
        <div className="card-element flex-fill card-bg text-center px-20">
            <h2 className="card-title">{title}</h2>
            <p>{price}€</p>
            <p>{description}</p>
            <p>Category: {category}</p>
            <img className="img-size" src={image} alt={title} />
            <p>{rating.count} reviews with an average of {rating.rate}</p>
        </div>
    )
}

export default Product;