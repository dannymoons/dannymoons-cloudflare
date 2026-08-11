type ErrorContext = Record<string, string | number | undefined>;

export function isNextControlFlowError(error: unknown): boolean {
  if (!error || typeof error !== "object" || !("digest" in error)) return false;

  const digest = (error as { digest?: unknown }).digest;
  return typeof digest === "string" && digest.startsWith("NEXT_");
}

export function logServerError(
  scope: string,
  error: unknown,
  context: ErrorContext = {},
): void {
  const details =
    error instanceof Error
      ? { name: error.name, message: error.message, stack: error.stack }
      : { message: String(error) };

  console.error(
    JSON.stringify({
      scope,
      ...context,
      error: details,
    }),
  );
}
