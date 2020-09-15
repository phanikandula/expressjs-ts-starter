import express from 'express';
import { rootHandler } from './handlers/root';
import { helloHandler } from './handlers/hello';

export const app = express();

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);
