export const cacheControl = {
  images: 'public, max-age=31536000, immutable',
  static: 'public, max-age=31536000, immutable',
  html: 'public, max-age=0, must-revalidate'
};

export const setupCaching = () => {
  if ('caches' in window) {
    caches.open('static-assets').then(cache => {
      cache.addAll([
        '/images/placeholder.jpg',
        '/fonts/inter.woff2',
        '/fonts/playfair.woff2'
      ]);
    });
  }
};