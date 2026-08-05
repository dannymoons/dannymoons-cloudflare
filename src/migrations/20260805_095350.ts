import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`posts\` ADD \`generate_rich_text\` integer DEFAULT true;`)
  await db.run(sql`ALTER TABLE \`_posts_v\` ADD \`version_generate_rich_text\` integer DEFAULT true;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`posts\` DROP COLUMN \`generate_rich_text\`;`)
  await db.run(sql`ALTER TABLE \`_posts_v\` DROP COLUMN \`version_generate_rich_text\`;`)
}
