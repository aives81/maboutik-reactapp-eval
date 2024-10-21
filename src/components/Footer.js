import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 MaBoutik. Ibrahim DIAWARA & Yves Roland D. DEBO.</p>
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
