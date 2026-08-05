import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'Danny Moons' NOT NULL,
  	\`logo_id\` integer,
  	\`default_seo_image_id\` integer,
  	\`social_twitter\` text,
  	\`social_linkedin\` text,
  	\`social_instagram\` text,
  	\`social_github\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`default_seo_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_settings\`("id", "site_name", "logo_id", "default_seo_image_id", "social_twitter", "social_linkedin", "social_instagram", "social_github", "updated_at", "created_at") SELECT "id", "site_name", "logo_id", "default_seo_image_id", "social_twitter", "social_linkedin", "social_instagram", "social_github", "updated_at", "created_at" FROM \`settings\`;`)
  await db.run(sql`DROP TABLE \`settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_settings\` RENAME TO \`settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`settings_logo_idx\` ON \`settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`settings_default_seo_image_idx\` ON \`settings\` (\`default_seo_image_id\`);`)
  await db.run(sql`ALTER TABLE \`posts_locales\` ADD \`markdown\` text;`)
  await db.run(sql`ALTER TABLE \`_posts_v_locales\` ADD \`version_markdown\` text;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'Payload Starter' NOT NULL,
  	\`logo_id\` integer,
  	\`default_seo_image_id\` integer,
  	\`social_twitter\` text,
  	\`social_linkedin\` text,
  	\`social_instagram\` text,
  	\`social_github\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`default_seo_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_settings\`("id", "site_name", "logo_id", "default_seo_image_id", "social_twitter", "social_linkedin", "social_instagram", "social_github", "updated_at", "created_at") SELECT "id", "site_name", "logo_id", "default_seo_image_id", "social_twitter", "social_linkedin", "social_instagram", "social_github", "updated_at", "created_at" FROM \`settings\`;`)
  await db.run(sql`DROP TABLE \`settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_settings\` RENAME TO \`settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`settings_logo_idx\` ON \`settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`settings_default_seo_image_idx\` ON \`settings\` (\`default_seo_image_id\`);`)
  await db.run(sql`ALTER TABLE \`posts_locales\` DROP COLUMN \`markdown\`;`)
  await db.run(sql`ALTER TABLE \`_posts_v_locales\` DROP COLUMN \`version_markdown\`;`)
}
