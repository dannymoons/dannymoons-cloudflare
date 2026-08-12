import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-d1-sqlite";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(
    sql`ALTER TABLE \`posts_locales\` ADD COLUMN \`meta_social_title\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`posts_locales\` ADD COLUMN \`meta_social_description\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`_posts_v_locales\` ADD COLUMN \`version_meta_social_title\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`_posts_v_locales\` ADD COLUMN \`version_meta_social_description\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`glossary_locales\` ADD COLUMN \`meta_social_title\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`glossary_locales\` ADD COLUMN \`meta_social_description\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`_glossary_v_locales\` ADD COLUMN \`version_meta_social_title\` text;`,
  );
  await db.run(
    sql`ALTER TABLE \`_glossary_v_locales\` ADD COLUMN \`version_meta_social_description\` text;`,
  );
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(
    sql`ALTER TABLE \`posts_locales\` DROP COLUMN \`meta_social_title\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`posts_locales\` DROP COLUMN \`meta_social_description\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`_posts_v_locales\` DROP COLUMN \`version_meta_social_title\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`_posts_v_locales\` DROP COLUMN \`version_meta_social_description\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`glossary_locales\` DROP COLUMN \`meta_social_title\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`glossary_locales\` DROP COLUMN \`meta_social_description\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`_glossary_v_locales\` DROP COLUMN \`version_meta_social_title\`;`,
  );
  await db.run(
    sql`ALTER TABLE \`_glossary_v_locales\` DROP COLUMN \`version_meta_social_description\`;`,
  );
}
