import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddWorcksComents1593384860260
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'coments',
      new TableColumn({
        name: 'works_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'coments',
      new TableForeignKey({
        name: 'WorksComents',
        columnNames: ['works_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'works',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('coments', 'WorksComents');

    await queryRunner.dropColumn('coments', 'works_id');
  }
}
