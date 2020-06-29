import { EntityRepository, Repository } from 'typeorm';
import Work from '../models/Works';

@EntityRepository(Work)
export default class WorksRepository extends Repository<Work> {
  public async findByDate(created_at: Date): Promise<Work | null> {
    const findWork = await this.findOne({
      order: { created_at: 'DESC' },
    });

    return findWork || null;
  }
}
