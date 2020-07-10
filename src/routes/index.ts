import { Router } from 'express';

import usersRouter from './users.routes';
import worksRouter from './works.routes';
import comentsRouter from './coments.routes';
import sessionRoute from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/works', worksRouter);
routes.use('/coments', comentsRouter);
routes.use('/sessions', sessionRoute);

export default routes;
