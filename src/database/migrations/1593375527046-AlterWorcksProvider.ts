import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterWorcksProvider1593375527046
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'works',
      new TableColumn({ name: 'user_id', type: 'uuid', isNullable: true }),
    );

    await queryRunner.createForeignKey(
      'works',
      new TableForeignKey({
        name: 'WorksProvider',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('works', 'WorksProvider');

    await queryRunner.dropColumn('works', 'user_id');
  }
}
