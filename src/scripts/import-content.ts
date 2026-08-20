import fs from "node:fs/promises";
import path from "node:path";

const [collection, directory, target] = process.argv.slice(2);

if ((collection !== "posts" && collection !== "glossary") || !directory) {
  throw new Error(
    "Usage: import-content <posts|glossary> <directory> [filename]",
  );
}

const serverURL =
  process.env.CONTENT_IMPORT_URL || process.env.NEXT_PUBLIC_SERVER_URL;
const secret = process.env.CRON_SECRET;
if (!serverURL || !secret) {
  throw new Error(
    "CONTENT_IMPORT_URL (or NEXT_PUBLIC_SERVER_URL) and CRON_SECRET are required.",
  );
}

const filenames = target
  ? [target.endsWith(".md") ? target : `${target}.md`]
  : (await fs.readdir(directory))
      .filter((filename) => filename.endsWith(".md"))
      .sort();

async function importFile(filename: string, skipRelatedPosts = false) {
  const markdown = await fs.readFile(path.join(directory, filename), "utf8");
  const response = await fetch(new URL("/api/import-content", serverURL), {
    method: "POST",
    headers: {
      authorization: `Bearer ${secret}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ collection, markdown, skipRelatedPosts }),
  });
  const result = (await response.json()) as {
    action?: string;
    error?: string;
    title?: string;
  };

  if (!response.ok || !result.action) {
    throw new Error(
      `${filename}: ${result.error || `HTTP ${response.status}`}`,
    );
  }

  console.log(`${result.action}: ${result.title || filename}`);
}

const passes = collection === "posts" ? [true, false] : [false];
for (const skipRelatedPosts of passes) {
  for (const filename of filenames) {
    await importFile(filename, skipRelatedPosts);
  }
}
