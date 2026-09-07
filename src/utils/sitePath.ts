const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Return a site-owned URL that works both locally and under the Pages base path. */
export function sitePath(path = '/'): string {
  if (/^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith('//')) {
    return path;
  }

  if (base && (path === base || path.startsWith(`${base}/`))) {
    return path;
  }

  if (!path || path === '/') {
    return `${base}/`;
  }

  return `${base}/${path.replace(/^\/+/, '')}`;
}
