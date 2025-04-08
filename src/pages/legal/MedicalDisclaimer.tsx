import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";

const MedicalDisclaimer = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Disclaimer | Freeze Fit Focus</title>
        <meta name="description" content="Important medical disclaimer regarding the health and fitness information provided on our website." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center"> Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="font-medium">IMPORTANT: This website provides general information and discussions about health, fitness, and related subjects. The information and other content provided on this website, or in any linked materials, are not intended and should not be construed as medical advice, nor is the information a substitute for professional medical expertise or treatment.</p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Not Medical Advice</h2>
          <p>The content of Freeze Fit Focus, including text, graphics, images, and information obtained from contributors, licensors, and other material on our website, is for informational and educational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Always Seek Professional Medical Advice</h2>
          <p>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on our website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Responsibility</h2>
          <p>If you think you may have a medical emergency, call your doctor or 911 immediately. Freeze Fit Focus does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">No Doctor-Patient Relationship</h2>
          <p>Reliance on any information provided by Freeze Fit Focus, its employees, contributors, or others appearing on the website is solely at your own risk. The site may contain health or fitness-related materials that are potentially sexually explicit or offensive. Freeze Fit Focus assumes no responsibility or liability for any consequences resulting directly or indirectly from any action or inaction you take based on the information found on or through our website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Fitness Activities</h2>
          <p>Not all exercise programs are suitable for everyone. Any fitness program you undertake should be discussed with your doctor or health professional to reduce the risk of injury. If you feel discomfort or pain, do not continue. The instruction and advice presented on this website are in no way intended as a substitute for medical consultation.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cold Exposure & Ice Baths</h2>
          <p>Cold exposure practices, including ice baths, cold plunges, and cold showers, carry potential health risks. These practices are not suitable for everyone and may be contraindicated for individuals with certain medical conditions, including but not limited to:</p>
          <ul className="list-disc ml-6 my-4">
            <li>Cardiovascular conditions (heart disease, uncontrolled hypertension)</li>
            <li>Raynaud's syndrome</li>
            <li>Cold urticaria</li>
            <li>Pregnancy</li>
            <li>Open wounds or skin infections</li>
            <li>Recent surgery</li>
            <li>Impaired temperature sensation</li>
          </ul>
          <p>Always consult with a healthcare provider before beginning any cold exposure practice. Start slowly and gradually build tolerance. Never practice cold exposure alone, and exit immediately if you experience extreme discomfort, numbness, or signs of hypothermia.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nutrition Information</h2>
          <p>Nutritional advice provided on this website is for informational purposes only and is not intended to replace the relationship between you and your physician or other healthcare professionals. Nutritional needs vary from person to person, depending on age, sex, health status, and total diet.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
          <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Freeze Fit Focus. Please note that Freeze Fit Focus does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Disclaimer</h2>
          <p>We may update this disclaimer from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about our efforts to ensure the safe use of our content.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Disclaimer, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> contact@freezefitfocus.com</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MedicalDisclaimer; 