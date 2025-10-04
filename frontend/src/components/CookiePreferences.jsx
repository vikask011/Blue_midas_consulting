import React, { useState, useEffect } from 'react';
import { useConsent } from '../context/ConsentContext';

const Row = ({ title, description, checked, onChange, disabled }) => (
  <div className="flex items-start justify-between py-4 border-b">
    <div className="pr-4">
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <div className={`w-11 h-6 rounded-full transition-colors ${disabled ? 'bg-gray-200' : (checked ? 'bg-blue-600' : 'bg-gray-300')} relative`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
      </div>
    </label>
  </div>
);

const CookiePreferences = () => {
  const { preferencesOpen, closePreferences, consent, savePreferences, acceptAll, rejectAll } = useConsent();
  const [prefs, setPrefs] = useState({ analytics: false, functional: false, marketing: false });

  useEffect(() => {
    if (preferencesOpen) {
      setPrefs({
        analytics: !!consent.analytics,
        functional: !!consent.functional,
        marketing: !!consent.marketing,
      });
    }
  }, [preferencesOpen]);

  if (!preferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={closePreferences} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">Cookie Preferences</h3>
          <p className="mt-1 text-sm text-gray-600">Manage your cookie settings. You can update your choices at any time.</p>
        </div>
        <div className="p-6">
          <Row
            title="Essential Cookies"
            description="Required for core site functionality such as security, network management, and accessibility."
            checked={true}
            disabled
          />
          <Row
            title="Analytics & Performance Cookies"
            description="Help us understand how our website is used so we can make improvements (e.g., Google Analytics)."
            checked={prefs.analytics}
            onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
          />
          <Row
            title="Functional / Preferences Cookies"
            description="Remember your choices such as language or theme to personalize your experience."
            checked={prefs.functional}
            onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
          />
          <Row
            title="Marketing / Advertising Cookies"
            description="Used to deliver relevant ads and track effectiveness across websites."
            checked={prefs.marketing}
            onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
          />
        </div>
        <div className="p-6 border-t flex flex-col sm:flex-row gap-3 justify-end">
          <button onClick={rejectAll} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Reject All</button>
          <button onClick={acceptAll} className="px-4 py-2 rounded-md border border-blue-200 text-blue-700 hover:bg-blue-50">Accept All</button>
          <button onClick={() => savePreferences(prefs)} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Save Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;