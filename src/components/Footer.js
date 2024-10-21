import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Ma Boutique de Chaussures. Tous droits réservés.</p>
            <div>
                <a href="/contact" style={linkStyle}>Contactez-nous</a> |
                <a href="/about" style={linkStyle}>À propos</a> |
                <a href="/terms" style={linkStyle}>Conditions d'utilisation</a>
            </div>
            <div style={socialStyle}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
};

// Styles en ligne pour simplifier, à remplacer par des classes CSS si nécessaire
const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    textAlign: 'center',
    marginTop: '20px',
};

const linkStyle = {
    margin: '0 10px',
};

const socialStyle = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
};

export default Footer;
