import { getPayload } from "payload";

import configPromise from "@payload-config";
import { importMarkdown, isImportCollection } from "@/utilities/import-content";

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return Response.json(
      { ok: false, error: "Content import is not configured." },
      { status: 503 },
    );
  }

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json(
      { ok: false, error: "Unauthorized." },
      { status: 401 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const { collection, markdown, skipRelatedPosts } = body as {
    collection?: unknown;
    markdown?: unknown;
    skipRelatedPosts?: unknown;
  };
  if (!isImportCollection(collection)) {
    return Response.json(
      { ok: false, error: 'Collection must be "posts" or "glossary".' },
      { status: 400 },
    );
  }
  if (typeof markdown !== "string" || !markdown.trim()) {
    return Response.json(
      { ok: false, error: "Markdown must be a non-empty string." },
      { status: 400 },
    );
  }

  try {
    const payload = await getPayload({ config: configPromise });
    const result = await importMarkdown(payload, collection, markdown, {
      skipRelatedPosts: skipRelatedPosts === true,
    });
    return Response.json({ ok: true, ...result });
  } catch (error) {
    console.error("Content import failed", error);
    return Response.json(
      {
        ok: false,
        error:
          error instanceof Error ? error.message : "Content import failed.",
      },
      { status: 400 },
    );
  }
}
