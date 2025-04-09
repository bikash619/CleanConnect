import { useState, useEffect } from 'react';

export function useCookieConsent() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem('cookiesAccepted') === 'true';
    setCookiesAccepted(accepted);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  return {
    cookiesAccepted,
    acceptCookies,
  };
}
