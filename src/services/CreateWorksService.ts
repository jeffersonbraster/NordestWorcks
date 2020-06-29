import { getRepository } from 'typeorm';
import Work from '../models/Works';

interface Request {
  title: string;
  descricao: string;
  contato: string;
  provider_id: string;
}

export default class CreateWorksService {
  public async execute({
    title,
    descricao,
    contato,
    provider_id,
  }: Request): Promise<Work> {
    const worksRepository = getRepository(Work);

    const works = worksRepository.create({
      title,
      descricao,
      contato,
      provider_id,
    });

    await worksRepository.save(works);

    return works;
  }
}
