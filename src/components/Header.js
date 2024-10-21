import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <div className="logo">
                <h1>Ma Boutique de Chaussures</h1>
            </div>
            <nav>
                <ul style={navStyle}>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/cart">Mon Panier</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

// Styles en ligne pour simplifier, à remplacer par des classes CSS si nécessaire
const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const navStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
};

export default Header;
