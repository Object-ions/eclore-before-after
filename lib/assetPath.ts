export function assetPath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${normalized}`;
}
