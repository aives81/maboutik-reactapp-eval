import { rest } from 'msw';
import products from '../data/shoes.json'; // Assure-toi d'importer le bon chemin vers ton fichier JSON

export const handlers = [
    rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(products)); // Renvoie les produits
    }),
    rest.get('/api/products/:id', (req, res, ctx) => {
        const { id } = req.params;
        const product = products.find((p) => p.id === Number(id));
        return res(ctx.status(200), ctx.json(product)); // Renvoie le produit par ID
    }),
];
