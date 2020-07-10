import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findAll(): Promise<User> {
    const findUser = await this.findAll();

    return findUser;
  }
}

export default UserRepository;
