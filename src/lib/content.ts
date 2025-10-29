/**
 * Content utilities for truncation and excerpt generation
 */

/**
 * Extract first paragraph from content
 * Useful for displaying previews on listing pages
 */
export function extractFirstParagraph(content: string): string {
  // Remove markdown image syntax
  const cleaned = content.replace(/!\[.*?\]\(.*?\)/g, '');

  // Split by paragraph breaks (double newlines)
  const paragraphs = cleaned
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return paragraphs[0] || '';
}

/**
 * Truncate text by character count, avoiding word cutoff
 */
export function truncateText(
  text: string,
  maxCharacters: number = 250,
  suffix: string = '...'
): string {
  if (text.length <= maxCharacters) return text;

  // Find last space within character limit
  const truncated = text.substring(0, maxCharacters);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  const finalIndex = lastSpaceIndex > 0 ? lastSpaceIndex : maxCharacters;
  return text.substring(0, finalIndex).trim() + suffix;
}

/**
 * Truncate by word count
 */
export function truncateByWords(
  text: string,
  wordLimit: number = 50,
  suffix: string = '...'
): string {
  const words = text.split(/\s+/);

  if (words.length <= wordLimit) return text;

  return words.slice(0, wordLimit).join(' ') + suffix;
}

/**
 * Extract excerpt with smart truncation
 * Tries to end at sentence boundary
 */
export function extractExcerpt(
  content: string,
  maxCharacters: number = 250
): string {
  const firstPara = extractFirstParagraph(content);

  if (firstPara.length <= maxCharacters) return firstPara;

  // Try to find sentence ending within limit
  const truncated = firstPara.substring(0, maxCharacters);
  const sentenceMatch = truncated.lastIndexOf('.');

  if (sentenceMatch > maxCharacters * 0.7) {
    return truncated.substring(0, sentenceMatch + 1);
  }

  return truncateText(firstPara, maxCharacters);
}

/**
 * Strip markdown formatting from content
 */
export function stripMarkdown(content: string): string {
  return content
    .replace(/!\[.*?\]\(.*?\)/g, '')                    // Remove images
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')              // Convert links to text
    .replace(/#+\s*/g, '')                              // Remove headings
    .replace(/\*\*([^*]+)\*\*/g, '$1')                  // Remove bold
    .replace(/\*([^*]+)\*/g, '$1')                      // Remove italics
    .replace(/`([^`]+)`/g, '$1')                        // Remove code blocks
    .trim();
}
