import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateWorksService from '../services/CreateWorksService';
import WorksRepository from '../repositories/WorksRepository';

const worksRouter = Router();

worksRouter.get('/', async (request, response) => {
  const worksRepository = getCustomRepository(WorksRepository);
  const works = await worksRepository.find();

  return response.json(works);
});

worksRouter.post('/', async (request, response) => {
  const { provider_id, title, descricao, contato } = request.body;

  const createWork = new CreateWorksService();

  const work = await createWork.execute({
    provider_id,
    title,
    descricao,
    contato,
  });

  return response.json(work);
});

export default worksRouter;
