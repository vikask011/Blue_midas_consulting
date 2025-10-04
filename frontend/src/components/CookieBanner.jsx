import React from 'react';
import { useConsent } from '../context/ConsentContext';

const CookieBanner = () => {
  const { showBanner, acceptAll, rejectAll, openPreferences } = useConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl m-4 rounded-xl shadow-2xl border border-blue-100 bg-white">
        <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center md:gap-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900">We value your privacy</h2>
            <p className="mt-2 text-sm text-gray-600">
              Blue-Midas Consulting uses cookies to enhance site navigation, analyze usage, and assist in our marketing efforts. 
              We won't set non-essential cookies unless you enable them. You can change your preferences at any time.
            </p>
            <p className="mt-2 text-sm">
              <a className="text-blue-700 underline hover:text-blue-900" href="/cookie-policy">Cookie Policy</a>
              <span className="text-gray-400"> • </span>
              <a className="text-blue-700 underline hover:text-blue-900" href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={rejectAll}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Reject All
            </button>
            <button
              onClick={openPreferences}
              className="px-4 py-2 rounded-md border border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Customize
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;