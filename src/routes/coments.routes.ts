import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticaded from '../middlewares/ensureAuthenticated';
import CreateComents from '../services/CreateComentService';
import ComentRepository from '../repositories/ComentRepository';

const comentsRouter = Router();
comentsRouter.use(ensureAuthenticaded);

comentsRouter.get('/', async (request, response) => {
  const worksRepository = getCustomRepository(ComentRepository);
  const works = await worksRepository.find({
    select: ['works_id', 'comentarios', 'created_at'],
    order: { created_at: 'DESC' },
  });

  return response.json(works);
});

comentsRouter.post('/', async (request, response) => {
  const { works_id, comentarios } = request.body;

  const createComent = new CreateComents();

  const coment = await createComent.execute({
    works_id,
    comentarios,
  });

  return response.json(coment);
});

export default comentsRouter;
