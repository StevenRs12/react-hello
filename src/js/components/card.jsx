import React from "react";

const Card = ({ product }) => {
    return (
        <div className="card-product">
            <div>
                <label>  Nombre: {product.name}
                </label>
            </div>
            <div>
                <label>  Precio: $ {product.price}
                </label>
            </div>
            <img src={product.image} alt="" />
            <button>Comprar</button>
        </div>
    )
}

export default Card;