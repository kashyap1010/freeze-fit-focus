import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Terms of Service | Freeze Fit Focus</title>
        <meta name="description" content="Our terms of service outline the rules and guidelines for using our website and services." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>Welcome to Freeze Fit Focus. These Terms of Service ("Terms") govern your access to and use of our website, including any content, functionality, and services offered on or through our website. By using our website, you accept and agree to be bound by these Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. User Accounts</h2>
          <p>When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on our website.</p>
          <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
          <p>The website and its original content, features, and functionality are owned by Freeze Fit Focus and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
          <p>By posting, uploading, inputting, providing, or submitting content to our website, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.</p>
          <p>You represent and warrant that you own or control all rights to the content you submit, and that your content does not violate any third party's intellectual property rights or other rights.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Prohibited Uses</h2>
          <p>You agree not to use our website:</p>
          <ul className="list-disc ml-6 my-4">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
            <li>To impersonate or attempt to impersonate Freeze Fit Focus, a Freeze Fit Focus employee, another user, or any other person or entity</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm Freeze Fit Focus or users of the website</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>In no event shall Freeze Fit Focus, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Your access to or use of or inability to access or use the website</li>
            <li>Any conduct or content of any third party on the website</li>
            <li>Any content obtained from the website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
          <p>We may terminate or suspend your account and bar access to the website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> terms@freezefitfocus.com</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService; 