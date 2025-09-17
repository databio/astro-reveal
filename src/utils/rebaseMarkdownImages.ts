export function rebaseMarkdownImages(markdown: string, basePath: string): string {
  // Transform relative image paths in markdown to absolute paths
  // Handles both markdown image syntax and HTML img tags
  return markdown
    // Handle markdown image syntax: ![alt](image.png)
    .replace(
      /!\[([^\]]*)\]\((?!http|\/)(.*?)\)/g,
      `![$1](${basePath}/$2)`
    )
    // Handle HTML img tags: <img src="image.png">
    .replace(
      /(<img[^>]*src=")(?!http|\/)/g,
      `$1${basePath}/`
    );
}