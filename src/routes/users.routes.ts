import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';
import CreateUserServices from '../services/CreateUserServices';
import UserRepository from '../repositories/UserRepository';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', async (request, response) => {
  //
  const usersRepository = getCustomRepository(UserRepository);
  const users = await usersRepository.find({
    select: ['name', 'cpf', 'email', 'endereco', 'uf'],
  });

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, cpf, email, password, endereco, uf } = request.body;

  const createUser = new CreateUserServices();

  const user = await createUser.execute({
    name,
    cpf,
    email,
    password,
    endereco,
    uf,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
