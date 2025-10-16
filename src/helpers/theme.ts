const isNavigatorAvailable = typeof navigator !== "undefined";

export const isWebKit =
  isNavigatorAvailable && /AppleWebKit/i.test(navigator.userAgent);
