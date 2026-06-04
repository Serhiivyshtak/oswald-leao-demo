/** Resolves a public-folder path for the current Vite `base` (e.g. GitHub Pages subpath). */
export function assetUrl(path: string): string {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export function cssBackgroundImage(path: string): string {
    return `url(${assetUrl(path)})`;
}
