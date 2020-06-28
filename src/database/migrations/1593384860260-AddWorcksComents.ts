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
        name: 'worcks_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'coments',
      new TableForeignKey({
        name: 'WorcksComents',
        columnNames: ['worcks_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'worcks',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('coments', 'WorcksComents');

    await queryRunner.dropColumn('coments', 'worcks_id');
  }
}
