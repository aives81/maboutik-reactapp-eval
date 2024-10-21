// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productImg from '../assets/icone.webp'; // Importe l'image du produit

const ProductDetail = () => {
    const { id } = useParams(); // Récupère l'ID du produit à partir de l'URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/api/products/' + id)
            .then((res) => {
                console.log(res);
                if (res.ok) {
                    return res.json();
                } else {
                    console.error('Something went wrong');
                }
            })
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (!product) {
        return <div>Chargement...</div>; // Affiche un message de chargement si le produit n'est pas encore disponible
    }

    return (
        <div className="product-list">
            <img src={productImg} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price} €</p>
            <p className="product-gender">{product.gender}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart">Ajouter au panier</button>
        </div>
    );
};

export default ProductDetail;
