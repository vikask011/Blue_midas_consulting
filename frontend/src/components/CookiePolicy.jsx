import React from 'react';

const CookiePolicy = () => {
  const lastUpdated = 'September 29, 2025';

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 leading-relaxed max-w-4xl">
      <h1 className="text-4xl font-extrabold text-gray-900">Cookie Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>

      <p className="mt-6">
        This Cookie Policy explains how Blue-Midas Consulting ("we", "us") uses cookies and similar technologies
        on our website. Except for essential cookies, we will ask for your consent before placing cookies on your
        device. You can change or withdraw your consent at any time via the "Cookie Settings" link in the footer.
      </p>

      <h2 className="text-2xl font-bold mt-10">What are cookies?</h2>
      <p className="mt-2">Cookies are small text files that are placed on your device to store data that can be recalled by a web server
        in the domain that placed the cookie. They are widely used to remember you and your preferences, either for a
        single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie").</p>

      <h2 className="text-2xl font-bold mt-10">How we categorize cookies</h2>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li><span className="font-semibold">Essential Cookies:</span> Necessary for the website to function properly (e.g., page navigation, security, forms).</li>
        <li><span className="font-semibold">Analytics & Performance Cookies:</span> Help us understand website usage and improve performance.</li>
        <li><span className="font-semibold">Functional/Preferences Cookies:</span> Remember your settings such as language or theme.</li>
        <li><span className="font-semibold">Marketing/Advertising Cookies:</span> Used to deliver relevant ads and track marketing effectiveness.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10">Cookies we use</h2>
      <p className="mt-2">The following tables list cookies that may be used on this site. Actual cookies present depend on the
        features you use and the consent you provide.</p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Purpose</th>
              <th className="border px-3 py-2 text-left">Duration</th>
              <th className="border px-3 py-2 text-left">Category</th>
              <th className="border px-3 py-2 text-left">First/Third Party</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">bm_consent</td>
              <td className="border px-3 py-2">Stores your cookie consent preferences.</td>
              <td className="border px-3 py-2">Up to 12 months</td>
              <td className="border px-3 py-2">Essential</td>
              <td className="border px-3 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">localStorage: bm_consent_v1</td>
              <td className="border px-3 py-2">Local storage entry for consent preferences and timestamp.</td>
              <td className="border px-3 py-2">Up to 12 months</td>
              <td className="border px-3 py-2">Essential</td>
              <td className="border px-3 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">localStorage: theme, language</td>
              <td className="border px-3 py-2">Saves your site preferences (e.g., theme or language) when enabled.</td>
              <td className="border px-3 py-2">Persistent until cleared</td>
              <td className="border px-3 py-2">Functional</td>
              <td className="border px-3 py-2">First-party</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">_ga</td>
              <td className="border px-3 py-2">Google Analytics – distinguishes users.</td>
              <td className="border px-3 py-2">2 years</td>
              <td className="border px-3 py-2">Analytics</td>
              <td className="border px-3 py-2">Third-party (Google)</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">_gid</td>
              <td className="border px-3 py-2">Google Analytics – distinguishes users.</td>
              <td className="border px-3 py-2">24 hours</td>
              <td className="border px-3 py-2">Analytics</td>
              <td className="border px-3 py-2">Third-party (Google)</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">_ga_&lt;property-id&gt;</td>
              <td className="border px-3 py-2">Google Analytics – persists session state.</td>
              <td className="border px-3 py-2">2 years</td>
              <td className="border px-3 py-2">Analytics</td>
              <td className="border px-3 py-2">Third-party (Google)</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">_gcl_au</td>
              <td className="border px-3 py-2">Google Ads/Analytics – conversion tracking.</td>
              <td className="border px-3 py-2">3 months</td>
              <td className="border px-3 py-2">Marketing</td>
              <td className="border px-3 py-2">Third-party (Google)</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">_fbp</td>
              <td className="border px-3 py-2">Meta Pixel – delivers advertising.</td>
              <td className="border px-3 py-2">3 months</td>
              <td className="border px-3 py-2">Marketing</td>
              <td className="border px-3 py-2">Third-party (Meta)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10">Managing your consent</h2>
      <p className="mt-2">You can update or withdraw your consent at any time via the <button className="text-blue-700 underline" onClick={() => window.openCookiePreferences?.()}>Cookie Settings</button> link in the footer. You can also control cookies through your browser settings.</p>

      <h2 className="text-2xl font-bold mt-10">Legal bases and regional rights</h2>
      <p className="mt-2">Where required (e.g., GDPR), we rely on your consent for non-essential cookies. Residents of California (CCPA/CPRA) may opt out of “sale”/“sharing” via rejecting marketing cookies. We honor Global Privacy Control signals where supported by the browser.</p>

      <h2 className="text-2xl font-bold mt-10">Contact</h2>
      <p className="mt-2">If you have questions about this policy, contact us at info@bluemidasconsulting.com.</p>
    </div>
  );
};

export default CookiePolicy;