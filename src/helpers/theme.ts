export const isWebKit =
  typeof navigator !== "undefined" &&
  (() => {
    const ua = navigator.userAgent;
    const isIOS = /iP(hone|ad|od)/i.test(ua);
    const isSafariDesktop =
      /^((?!chrome|crios|android|fxios|edg).)*safari/i.test(ua);
    return isIOS || isSafariDesktop;
  })();
