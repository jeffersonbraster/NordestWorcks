import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateUserServices from '../services/CreateUserServices';
import UserRepository from '../repositories/UserRepository';

const usersRouter = Router();

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

export default usersRouter;
