import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  cpf: string;
  email: string;
  password: string;
  endereco: string;
  uf: string;
}

export default class CreateUserService {
  public async execute({
    name,
    cpf,
    email,
    password,
    endereco,
    uf,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExist = await usersRepository.findOne({
      where: { email },
    });

    const hashedpass = await hash(password, 7);

    if (checkUserExist) {
      throw new AppError('Email do usuário já está sendo usado.');
    }

    const user = usersRepository.create({
      name,
      cpf,
      email,
      password: hashedpass,
      endereco,
      uf,
    });

    await usersRepository.save(user);

    return user;
  }
}
