import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Privacy Policy | Freeze Fit Focus</title>
        <meta name="description" content="Our privacy policy explains how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>Welcome to Freeze Fit Focus. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this Privacy Policy carefully. By using our website, you consent to the data practices described in this Privacy Policy.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Register for an account</li>
            <li>Sign up for our newsletter</li>
            <li>Submit a contact form</li>
            <li>Participate in surveys or promotions</li>
            <li>Comment on our blog posts</li>
          </ul>
          <p>The personal information we collect may include your name, email address, and any other information you choose to provide.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Automatically Collected Information</h2>
          <p>When you access our website, we may automatically collect certain information about your device, including:</p>
          <ul className="list-disc ml-6 my-4">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referring website</li>
            <li>Other browsing information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Provide, maintain, and improve our website</li>
            <li>Send you newsletters, updates, and marketing communications</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Service Providers</h2>
          <p>We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, customer service, and marketing assistance.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> privacy@freezefitfocus.com</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy; 