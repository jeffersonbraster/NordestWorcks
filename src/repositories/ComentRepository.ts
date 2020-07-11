import { EntityRepository, Repository } from 'typeorm';
import Coments from '../models/Coments';

@EntityRepository(Coments)
class ComentRepository extends Repository<Coments> {
  public async findAll(): Promise<Coments> {
    const findComentWorks = await this.findAll();

    return findComentWorks;
  }
}

export default ComentRepository;

// @EntityRepository(Coments)
// export default class ComentRepository extends Repository<Coments> {
//   public async findComentsByWorks(works_id: string): Promise<Coments | null> {
//     const findComentWorks = await this.find({
//       select: ['comentarios', 'created_at'],
//       where: { works_id },
//       order: { created_at: 'DESC' },
//     });

//     return findComentWorks || null;
//   }
// }
