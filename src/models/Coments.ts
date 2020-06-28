import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Worcks from './Worcks';

@Entity('coments')
export default class Coments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Worcks)
  @JoinColumn({ name: 'provider_id' })
  worckscoment: Worcks;

  @Column({ length: 250 })
  comentarios: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
