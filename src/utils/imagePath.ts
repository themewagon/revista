import { sitePath } from './sitePath';

export function resolveImagePath(imagePath: string | undefined | null): string {
  if (!imagePath) {
    return '';
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  if (imagePath.startsWith('/')) {
    return sitePath(imagePath);
  }

  if (imagePath.startsWith('../../content/')) {
    return sitePath(imagePath.replace('../../content/', '/content/'));
  }

  if (imagePath.startsWith('../')) {
    return sitePath(imagePath.replace('../', ''));
  }

  return sitePath(`/content/${imagePath}`);
}

export function isValidImagePath(imagePath: string | undefined | null): boolean {
  if (!imagePath) {
    return false;
  }
  return imagePath.trim().length > 0;
}
