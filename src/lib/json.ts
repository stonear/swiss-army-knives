/**
 * Strips comments from JSON string before parsing
 * Handles both single-line and multi-line comments
 */
export function stripJsonComments(jsonString: string): string {
  let inString = false
  let escaped = false
  let result = ''

  // Process the JSON string character by character
  for (let i = 0; i < jsonString.length; i++) {
    const char = jsonString[i]
    const nextChar = jsonString[i + 1]

    // Handle string boundaries
    if (char === '"' && !escaped) {
      inString = !inString
      result += char
      continue
    }

    // Handle escape sequences
    if (char === '\\' && !escaped) {
      escaped = true
      result += char
      continue
    } else {
      escaped = false
    }

    // If we're in a string, preserve everything
    if (inString) {
      result += char
      continue
    }

    // Handle multi-line comments
    if (char === '/' && nextChar === '*') {
      while (i < jsonString.length) {
        if (jsonString[i] === '*' && jsonString[i + 1] === '/') {
          i += 2
          break
        }
        i++
      }
      continue
    }

    // Handle single-line comments
    if (char === '/' && nextChar === '/') {
      while (i < jsonString.length && jsonString[i] !== '\n') {
        i++
      }
      result += '\n' // Preserve line numbers
      continue
    }

    // Remove control characters outside strings
    if (!/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/.test(char)) {
      result += char
    }
  }

  // Remove any trailing commas before closing brackets/braces
  result = result.replace(/,(\s*[}\]])/g, '$1')

  return result.trim()
}

/**
 * Safely parses JSON string with comment support
 * Removes comments, trailing commas, and invalid control characters before parsing
 * while preserving valid control characters within string literals
 *
 * @throws {SyntaxError} If the JSON is invalid after cleaning
 */
export function parseJson(jsonString: string) {
  const cleanJson = stripJsonComments(jsonString)
  return JSON.parse(cleanJson)
}
