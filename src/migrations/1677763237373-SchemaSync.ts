import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1677763237373 implements MigrationInterface {
    name = 'SchemaSync1677763237373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "desc2" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "desc2"`);
    }

}
