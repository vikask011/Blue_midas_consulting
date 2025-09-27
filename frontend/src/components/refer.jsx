// components/Refer.jsx
import React from "react";

const Refer = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     {/* Page Header */}
<div
  className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('img/team.webp')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative text-center text-white">
    <img
      src="/images/logo.png"   // <-- replace favicon.png with your logo here
      alt="Blue Midas Consulting Logo"
      className="mx-auto w-28 h-28 mb-4 rounded-full shadow-lg"
    />
    <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
      BLUE MIDAS CONSULTING
    </h1>
  </div>
</div>

      {/* Referral Form Header */}
      <div className="text-center mt-12 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Referral Form & Policy
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <strong>
            We request you to read the referral policy mentioned below for more details.
          </strong>
        </p>
      </div>

      {/* Referral Form */}
      <div className="flex justify-center my-12 px-4">
        <div className="w-full md:w-3/4 lg:w-2/3 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
            Referral Form
          </h3>

          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjAvHaltRM33GePh0wqO4PBGg3gwi-ZsHDq5XnCM8eP1I-hA/formResponse"
            method="POST"
            noValidate
          >
            {/* Referrer Details */}
            <div className="border p-6 rounded-lg mb-6 shadow-sm bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-4">
                Referrer / Your Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.905206211"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.1296579232"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.1541095227"
                  placeholder="Your Mobile"
                  required
                />
                <select
                  className="form-select w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.1569737225"
                  required
                >
                  <option disabled selected>
                    Relationship with referred entity
                  </option>
                  <option value="My Client">My Client</option>
                  <option value="My Vendor">My Vendor</option>
                  <option value="Family Member">Family Member</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Referred Client Details */}
            <div className="border p-6 rounded-lg mb-6 shadow-sm bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-4">
                Referred / Client's Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.1720690083"
                  placeholder="Client Name / POC"
                  required
                />
                <input
                  type="email"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.152942824"
                  placeholder="Client Email ID"
                  required
                />
                <input
                  type="text"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.506558835"
                  placeholder="Client Mobile No."
                  required
                />
                <input
                  type="text"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.2106241535"
                  placeholder="Client Company Name"
                  required
                />
                <input
                  type="text"
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500"
                  name="entry.1240432073"
                  placeholder="Client Company Website"
                  required
                />
                <textarea
                  className="form-input w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-500 col-span-2"
                  name="entry.1247779098"
                  placeholder="Additional details"
                  style={{ height: "130px" }}
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full md:w-1/2 transition-colors"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Full Referral Policy */}
      <div className="text-left max-w-4xl mx-auto px-4 md:px-0 mb-12 space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
          Referral Policy
        </h3>

        <p><strong>Effective Date: 16/05/2025</strong></p>
        <p>
          Blue Midas Consulting ("we", "us", or "our") is pleased to offer an Affiliate/Referral Program designed to reward individuals who help us grow by referring potential clients to our business consulting services.
        </p>

        <h4 className="font-semibold mt-4">1. Eligibility</h4>
        <p>Anyone may participate in this program by referring potential clients to us, provided they:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Are 18 years of age or older.</li>
          <li>Provide accurate and truthful information about the referred lead.</li>
          <li>Are not employees, agents, or current contractors of Blue Midas Consulting.</li>
        </ul>

        <h4 className="font-semibold mt-4">2. Referral Submission</h4>
        <p>To be eligible for a referral bonus, the referrer must:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Submit the details of referee (oneself) and referral (the client for whom we would work) through the official referral form on our website: <strong>www.bluemidasconsulting.com</strong></li>
          <li>Ensure that the referred party is not already an active lead or existing client in our records. In case of more than 1 referrer, clients will be consulted and their opinion will be considered as final to award referral bonus.</li>
          <li>In no scenario, more than one referrer will be awarded referral bonus for a consulting project with any client.</li>
          <li>Include full and accurate details of the lead: name, company, contact information, and nature of the consulting requirement.</li>
        </ul>

        <h4 className="font-semibold mt-4">3. Referral Bonus</h4>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Applicable % Referral Bonus</th>
                <th className="border border-gray-300 px-4 py-2">Net Project fee received from the referred client, excluding taxes, payment gateway charges, and reimbursable expenses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">10% of the total net project fee received from the referred client.</td>
                <td className="border border-gray-300 px-4 py-2">Less than INR 1 Lac</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">8.5% of the total net project fee received from the referred client.</td>
                <td className="border border-gray-300 px-4 py-2">Greater than INR 1 Lac & less than INR 2 Lac</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">7% of the total net project fee received from the referred client.</td>
                <td className="border border-gray-300 px-4 py-2">Greater than INR 2 Lac</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="list-disc list-inside ml-4 mt-2">
          <li>The commission will be calculated only on the actual payments received from the referred client, excluding taxes, payment gateway charges, and reimbursable expenses.</li>
          <li>If the referred client engages us for multiple projects, the commission will apply only to the initial project that directly results from the referral.</li>
          <li>Consulting service engagements are custom in nature. The total fee payable by the client for a particular project will be determined upon mutual agreement and formal sign-off, and may be subject to change during the course of the engagement. Affiliates/referrers shall have no legal or decision-making authority in the scope, terms, pricing, or execution of any client engagement.</li>
        </ul>

        <h4 className="font-semibold mt-4">4. Payment Terms</h4>
        <ul className="list-disc list-inside ml-4">
          <li>Commission will be paid only after full receipt of the agreed project fee from the client.</li>
          <li>Payment will be made via bank transfer or any other mutually agreed mode within 30 days of full payment realization from the client.</li>
        </ul>

        <h4 className="font-semibold mt-4">5. Disqualification</h4>
        <ul className="list-disc list-inside ml-4">
          <li>The lead was already known to, or previously contacted by, Blue Midas Consulting.</li>
          <li>The information submitted was false, misleading, or incomplete.</li>
          <li>The client engagement is canceled, terminated, or refunded.</li>
          <li>The referrer attempts to influence the project scope, deliverables, pricing, or execution.</li>
          <li>There is any breach of this policy or any unethical behavior by the referrer.</li>
        </ul>

        <h4 className="font-semibold mt-4">6. Program Changes and Termination</h4>
        <p>Blue Midas Consulting reserves the right to amend, suspend, or terminate this Affiliate/Referral Program at any time without prior notice. All valid referrals submitted before any such changes will be honored in accordance with the terms active at the time of submission.</p>

        <h4 className="font-semibold mt-4">7. Governing Law</h4>
        <p>This policy shall be governed in accordance with the laws of India. Any disputes arising from or in connection with this Affiliate/Referral Program shall fall under the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.</p>
      </div>
    </div>
  );
};

export default Refer;
