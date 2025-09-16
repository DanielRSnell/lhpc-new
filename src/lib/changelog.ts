import { getCollection } from 'astro:content';

// Types for changelog entries that match Astro's content collection schema
export interface ChangelogEntry {
  id: string;
  body?: string;
  collection: 'changelog';
  data: {
    title: string;
    date: string;
    id: string;
  };
}

// Simplified type for component props
export interface ChangelogEntryData {
  id: string;
  title: string;
  date: string;
  content: string;
  slug: string;
}

// Transform Astro content collection entry to component-friendly format
export function transformChangelogEntry(
  entry: ChangelogEntry,
): ChangelogEntryData {
  return {
    id: entry.data.id,
    title: entry.data.title,
    date: entry.data.date,
    content: entry.body || '',
    slug: entry.id,
  };
}

// Get all changelog entries, sorted by date (descending for newest first)
export async function getChangelogEntries(): Promise<ChangelogEntryData[]> {
  const entries = await getCollection('changelog');

  // Sort by date in descending order (newest first)
  const sortedEntries = entries.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime(); // Descending order for newest first
  });

  return sortedEntries.map(transformChangelogEntry);
}
