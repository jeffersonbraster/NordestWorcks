import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Works from './Works';

@Entity('coments')
export default class Coments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  works_id: string;

  @ManyToOne(() => Works)
  @JoinColumn({ name: 'works_id' })
  worckscoment: Works;

  @Column({ length: 250 })
  comentarios: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
