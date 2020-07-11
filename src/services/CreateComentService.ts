import { getRepository } from 'typeorm';
import Coments from '../models/Coments';

interface Request {
  works_id: string;
  comentarios: string;
}

export default class CreateComentService {
  public async execute({ works_id, comentarios }: Request): Promise<Coments> {
    const comentsRepository = getRepository(Coments);

    const coments = comentsRepository.create({
      works_id,
      comentarios,
    });

    await comentsRepository.save(coments);

    return coments;
  }
}
