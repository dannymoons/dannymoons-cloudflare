import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`glossary_aliases\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`alias\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`glossary\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`glossary_aliases_order_idx\` ON \`glossary_aliases\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`glossary_aliases_parent_id_idx\` ON \`glossary_aliases\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`glossary\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`markdown\` text,
  	\`generate_rich_text\` integer DEFAULT true,
  	\`content\` text,
  	\`published_at\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE INDEX \`glossary_updated_at_idx\` ON \`glossary\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`glossary_created_at_idx\` ON \`glossary\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`glossary__status_idx\` ON \`glossary\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`glossary_locales\` (
  	\`title\` text,
  	\`meta_title\` text,
  	\`meta_image_id\` integer,
  	\`meta_description\` text,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`glossary\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`glossary_meta_meta_image_idx\` ON \`glossary_locales\` (\`meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`glossary_slug_idx\` ON \`glossary_locales\` (\`slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`glossary_locales_locale_parent_id_unique\` ON \`glossary_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`glossary_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`tags_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`glossary\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`glossary_rels_order_idx\` ON \`glossary_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`glossary_rels_parent_idx\` ON \`glossary_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`glossary_rels_path_idx\` ON \`glossary_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`glossary_rels_tags_id_idx\` ON \`glossary_rels\` (\`tags_id\`);`)
  await db.run(sql`CREATE TABLE \`_glossary_v_version_aliases\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alias\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_glossary_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_aliases_order_idx\` ON \`_glossary_v_version_aliases\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_aliases_parent_id_idx\` ON \`_glossary_v_version_aliases\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_glossary_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_markdown\` text,
  	\`version_generate_rich_text\` integer DEFAULT true,
  	\`version_content\` text,
  	\`version_published_at\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`glossary\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_glossary_v_parent_idx\` ON \`_glossary_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_version_updated_at_idx\` ON \`_glossary_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_version_created_at_idx\` ON \`_glossary_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_version__status_idx\` ON \`_glossary_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_created_at_idx\` ON \`_glossary_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_updated_at_idx\` ON \`_glossary_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_snapshot_idx\` ON \`_glossary_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_published_locale_idx\` ON \`_glossary_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_latest_idx\` ON \`_glossary_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_autosave_idx\` ON \`_glossary_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_glossary_v_locales\` (
  	\`version_title\` text,
  	\`version_meta_title\` text,
  	\`version_meta_image_id\` integer,
  	\`version_meta_description\` text,
  	\`version_generate_slug\` integer DEFAULT true,
  	\`version_slug\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_glossary_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_meta_version_meta_image_idx\` ON \`_glossary_v_locales\` (\`version_meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_version_version_slug_idx\` ON \`_glossary_v_locales\` (\`version_slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`_glossary_v_locales_locale_parent_id_unique\` ON \`_glossary_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_glossary_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`tags_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_glossary_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_glossary_v_rels_order_idx\` ON \`_glossary_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_rels_parent_idx\` ON \`_glossary_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_rels_path_idx\` ON \`_glossary_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_glossary_v_rels_tags_id_idx\` ON \`_glossary_v_rels\` (\`tags_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`glossary_id\` integer REFERENCES glossary(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_glossary_id_idx\` ON \`payload_locked_documents_rels\` (\`glossary_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`glossary_aliases\`;`)
  await db.run(sql`DROP TABLE \`glossary\`;`)
  await db.run(sql`DROP TABLE \`glossary_locales\`;`)
  await db.run(sql`DROP TABLE \`glossary_rels\`;`)
  await db.run(sql`DROP TABLE \`_glossary_v_version_aliases\`;`)
  await db.run(sql`DROP TABLE \`_glossary_v\`;`)
  await db.run(sql`DROP TABLE \`_glossary_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_glossary_v_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`categories_id\` integer,
  	\`media_id\` integer,
  	\`pages_id\` integer,
  	\`posts_id\` integer,
  	\`tags_id\` integer,
  	\`team_members_id\` integer,
  	\`testimonials_id\` integer,
  	\`users_id\` integer,
  	\`wiki_id\` integer,
  	\`wiki_categories_id\` integer,
  	\`redirects_id\` integer,
  	\`forms_id\` integer,
  	\`form_submissions_id\` integer,
  	\`search_id\` integer,
  	\`payload_folders_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`team_members_id\`) REFERENCES \`team_members\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`testimonials_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`wiki_id\`) REFERENCES \`wiki\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`wiki_categories_id\`) REFERENCES \`wiki_categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`redirects_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`form_submissions_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`search_id\`) REFERENCES \`search\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`payload_folders_id\`) REFERENCES \`payload_folders\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "categories_id", "media_id", "pages_id", "posts_id", "tags_id", "team_members_id", "testimonials_id", "users_id", "wiki_id", "wiki_categories_id", "redirects_id", "forms_id", "form_submissions_id", "search_id", "payload_folders_id") SELECT "id", "order", "parent_id", "path", "categories_id", "media_id", "pages_id", "posts_id", "tags_id", "team_members_id", "testimonials_id", "users_id", "wiki_id", "wiki_categories_id", "redirects_id", "forms_id", "form_submissions_id", "search_id", "payload_folders_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_tags_id_idx\` ON \`payload_locked_documents_rels\` (\`tags_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_team_members_id_idx\` ON \`payload_locked_documents_rels\` (\`team_members_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_testimonials_id_idx\` ON \`payload_locked_documents_rels\` (\`testimonials_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_wiki_id_idx\` ON \`payload_locked_documents_rels\` (\`wiki_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_wiki_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`wiki_categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_redirects_id_idx\` ON \`payload_locked_documents_rels\` (\`redirects_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_forms_id_idx\` ON \`payload_locked_documents_rels\` (\`forms_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_form_submissions_id_idx\` ON \`payload_locked_documents_rels\` (\`form_submissions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_search_id_idx\` ON \`payload_locked_documents_rels\` (\`search_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_payload_folders_id_idx\` ON \`payload_locked_documents_rels\` (\`payload_folders_id\`);`)
}
