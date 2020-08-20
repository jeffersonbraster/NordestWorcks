import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import CreateWorksService from '../services/CreateWorksService';
import WorksRepository from '../repositories/WorksRepository';

import ensureAuthenticaded from '../middlewares/ensureAuthenticated';

const worksRouter = Router();

worksRouter.use(ensureAuthenticaded);
const upload = multer(uploadConfig);

worksRouter.get('/', async (request, response) => {
  const worksRepository = getCustomRepository(WorksRepository);
  const works = await worksRepository.find();

  return response.json(works);
});

worksRouter.post('/', upload.single('banner'), async (request, response) => {
  const user_id = request.user.id;
  const { title, descricao, contato } = request.body;

  const createWork = new CreateWorksService();

  const work = await createWork.execute({
    title,
    descricao,
    contato,
    user_id,
    banner: request.file.filename,
  });

  return response.json(work);
});

export default worksRouter;
