import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import AppError from '../errors/AppError';
import Work from '../models/Works';
import uploadConfig from '../config/upload';

interface Request {
  title: string;
  descricao: string;
  contato: string;
  user_id: string;
  banner: string;
}

export default class CreateWorksService {
  public async execute({
    title,
    descricao,
    contato,
    user_id,
    banner,
  }: Request): Promise<Work> {
    const worksRepository = getRepository(Work);

    if (!user_id) {
      throw new AppError('sem id');
    }

    const workBannerFilePath = path.join(uploadConfig.directory, banner);
    const workBannerFileExist = await fs.promises.stat(workBannerFilePath);

    if (workBannerFileExist) {
      await fs.promises.unlink(workBannerFilePath);
    }

    const works = worksRepository.create({
      title,
      descricao,
      contato,
      user_id,
      banner,
    });

    await worksRepository.save(works);

    return works;
  }
}
