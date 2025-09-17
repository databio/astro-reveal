import { getEntry } from 'astro:content';

export async function getRebasedEntry(collection: string, slug: string) {
  const entry = await getEntry(collection, slug);

  if (!entry?.body) {
    return entry;
  }

  // Transform relative image paths to absolute paths based on the slug
  const rebasedBody = entry.body.replace(
    /(<img[^>]*src=")(?!http|\/)/g,
    `$1/slides/${slug}/`
  );

  return {
    ...entry,
    body: rebasedBody
  };
}