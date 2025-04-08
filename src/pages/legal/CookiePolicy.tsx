import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Cookie Policy | Freeze Fit Focus</title>
        <meta name="description" content="Learn about how we use cookies and similar technologies on our website." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>This Cookie Policy explains how Freeze Fit Focus ("we", "us", or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this Cookie Policy.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies allow the website to recognize your device and remember if you've been to the website before.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p>We use cookies for a variety of purposes, including to:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Enable certain functions of the website</li>
            <li>Provide analytics</li>
            <li>Store your preferences</li>
            <li>Enable advertisement delivery, including behavioral advertising</li>
            <li>Ensure the website's security</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <p>We use the following types of cookies on our website:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Preference Cookies</h3>
          <p>These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, personalized features.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
          <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
          <p>These cookies track your online activity to help advertisers deliver more relevant advertisements or to limit how many times you see an advertisement. These cookies can share information with other organizations or advertisers.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These may include:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Google Analytics</li>
            <li>Google AdSense</li>
            <li>Facebook Pixel</li>
            <li>Other advertising partners</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you. It may also stop you from saving customized settings like login information.</p>
          <p>To manage cookies in different web browsers, visit the following links:</p>
          <ul className="list-disc ml-6 my-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Cookie Policy</h2>
          <p>We may update our Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> privacy@freezefitfocus.com</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default CookiePolicy; 