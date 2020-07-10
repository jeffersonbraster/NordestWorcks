import { EntityRepository, Repository } from 'typeorm';
import Work from '../models/Works';

@EntityRepository(Work)
export default class WorksRepository extends Repository<Work> {
  public async findAll(): Promise<Work> {
    const findWork = await this.findAll();

    return findWork;
  }
}
