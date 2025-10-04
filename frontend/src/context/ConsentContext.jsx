import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'bm_consent_v1';
const CONSENT_VERSION = '1.0.0';

const defaultConsent = {
  version: CONSENT_VERSION,
  essential: true, // always true; strictly necessary
  analytics: false,
  functional: false,
  marketing: false,
  timestamp: null,
};

function isGPCActive() {
  try {
    return typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true;
  } catch {
    return false;
  }
}

const ConsentContext = createContext({
  consent: defaultConsent,
  showBanner: false,
  preferencesOpen: false,
  acceptAll: () => {},
  rejectAll: () => {},
  savePreferences: (_prefs) => {},
  openPreferences: () => {},
  closePreferences: () => {},
});

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    // Also set a minimal strictly-necessary cookie that indicates consent stored
    // Max-Age 31536000 ~ 1 year; SameSite=Lax; Secure recommended if HTTPS
    document.cookie = `bm_consent=1; Max-Age=31536000; Path=/; SameSite=Lax`;
  } catch {
    // ignore
  }
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function clearNonEssentialCookies() {
  // Best-effort: remove commonly used analytics/marketing cookies and any first-party
  // cookies that we know we might set for preferences.
  const known = [
    // Google Analytics / Ads
    '_ga', '_gid', '_gat', '_gcl_au',
    // GA4 property-specific cookies often look like _ga_XXXX
  ];
  // Remove cookies matching prefixes like _ga_
  const cookies = document.cookie ? document.cookie.split(';') : [];
  for (const c of cookies) {
    const name = c.split('=')[0].trim();
    if (
      known.includes(name) ||
      name.startsWith('_ga_') ||
      name === '_fbp' || // Meta Pixel
      name === '_gads' || // Google Ads
      name === '_tt_enable_cookie' || name === '_ttp' // TikTok
    ) {
      deleteCookie(name);
    }
  }
  // Clear localStorage-based preferences if functional is off
  try {
    // Example keys your app might use
    localStorage.removeItem('theme');
    localStorage.removeItem('language');
  } catch {}
}

let gaLoaded = false;
function loadGoogleAnalyticsIfAllowed(consent) {
  if (!consent?.analytics) return;
  const GA_ID = import.meta.env.VITE_GA_ID;
  if (!GA_ID || gaLoaded) return; // nothing to load or already loaded

  // gtag loader
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gtagScript);

  const inline = document.createElement('script');
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
  gaLoaded = true;
}

function applyConsentEffects(consent) {
  // Load analytics scripts if consented
  loadGoogleAnalyticsIfAllowed(consent);

  // If analytics/marketing are disabled, try to clear their cookies
  if (!consent.analytics || !consent.marketing) {
    clearNonEssentialCookies();
  }
  // Functional preferences would be respected by your app logic; we clear them when turned off
  if (!consent.functional) {
    try {
      localStorage.removeItem('theme');
      localStorage.removeItem('language');
    } catch {}
  }
}

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(defaultConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const saved = readStorage();
    if (saved) {
      setConsent(saved);
      setShowBanner(false);
      // Apply effects in case page reloaded
      applyConsentEffects(saved);
    } else {
      setShowBanner(true);
    }

    // Expose a global hook for opening preferences
    window.openCookiePreferences = () => setPreferencesOpen(true);
  }, []);

  const persist = (next) => {
    // Respect Global Privacy Control (CPRA) by forcing marketing/sharing off
    const gpc = isGPCActive();
    const enforced = {
      ...next,
      marketing: gpc ? false : next.marketing,
    };
    const stamped = { ...enforced, timestamp: new Date().toISOString(), version: CONSENT_VERSION };
    setConsent(stamped);
    writeStorage(stamped);
    applyConsentEffects(stamped);
  };

  const acceptAll = () => {
    const gpc = isGPCActive();
    persist({ ...defaultConsent, analytics: true, functional: true, marketing: gpc ? false : true });
    setShowBanner(false);
    setPreferencesOpen(false);
  };

  const rejectAll = () => {
    persist({ ...defaultConsent, analytics: false, functional: false, marketing: false });
    setShowBanner(false);
    setPreferencesOpen(false);
  };

  const savePreferences = (prefs) => {
    persist({ ...defaultConsent, ...prefs });
    setShowBanner(false);
    setPreferencesOpen(false);
  };

  const value = useMemo(() => ({
    consent,
    showBanner,
    preferencesOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences: () => setPreferencesOpen(true),
    closePreferences: () => setPreferencesOpen(false),
  }), [consent, showBanner, preferencesOpen]);

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}