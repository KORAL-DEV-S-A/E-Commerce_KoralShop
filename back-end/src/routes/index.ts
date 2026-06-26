import {Router} from 'express';

const routes = Router();

routes.get('/v1', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

export default routes;