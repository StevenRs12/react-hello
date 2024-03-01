import React from "react";

const Card = ({ character }) => {
    return (
        <div className="card-product">
            <div>
                <label>  Nombre: {character.name}
                </label>
            </div>
            <div>
                <label>  Estado: $ {character.status}
                </label>
            </div>
            <img className="img-card" src={character.image} alt="" />
        </div>
    )
}

export default Card;