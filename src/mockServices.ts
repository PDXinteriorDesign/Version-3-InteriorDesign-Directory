export const isMockingServices = typeof window !== 'undefined' && window.navigator.userAgent.includes('puppeteer');
