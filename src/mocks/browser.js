import { setupWorker } from 'msw/browser';
import { handlers } from './handlers'; // Assure-toi que le chemin est correct

// Configure le Service Worker avec les handlers
export const worker = setupWorker(...handlers);