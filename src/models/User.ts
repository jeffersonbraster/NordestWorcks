import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  avatar: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 8 })
  password: string;

  @Column({ length: 200 })
  endereco: string;

  @Column({ length: 2 })
  uf: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
