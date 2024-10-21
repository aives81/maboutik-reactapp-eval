import { http, HttpResponse } from 'msw';
import products from '../data/shoes.json'; // Assure-toi d'importer le bon chemin vers ton fichier JSON

const getProducts = http.get('/api/products', async (req, res, ctx) => {
    return HttpResponse.json(products, {status: 200}); // Renvoie les produits
});

const getOneProduct = http.get('/api/products/:id', async (req, res, ctx) => {
        const { id } = req.params;
        const product = products.find((p) => p.id === Number(id));
        return res(ctx.status(200), ctx.json(product)); // Renvoie le produit par ID
    });

export const handlers = [
    getProducts,
    getOneProduct
];