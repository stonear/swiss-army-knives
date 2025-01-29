/**
 * Strips comments from JSON string before parsing
 * Handles both single-line and multi-line comments
 */
export function stripJsonComments(jsonString: string): string {
  // First, handle multi-line comments
  const withoutMultiLine = jsonString.replace(/\/\*[\s\S]*?\*\//g, '')

  // Then handle single-line comments, preserving newlines to maintain line numbers
  const withoutComments = withoutMultiLine.replace(/\/\/[^\n\r]*[\n\r]?/g, '\n')

  // Remove any trailing commas before closing brackets/braces
  const withoutTrailingCommas = withoutComments.replace(/,(\s*[}\]])/g, '$1')

  return withoutTrailingCommas.trim()
}

/**
 * Safely parses JSON string with comment support
 * Removes comments and trailing commas before parsing
 *
 * @throws {SyntaxError} If the JSON is invalid after comment removal
 */
export function parseJson(jsonString: string) {
  const cleanJson = stripJsonComments(jsonString)
  return JSON.parse(cleanJson)
}
