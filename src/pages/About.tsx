import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>About Us | Freeze Fit Focus</title>
        <meta name="description" content="Learn about Freeze Fit Focus - our mission, values, and the team behind our evidence-based approach to cold exposure, fitness, and mindfulness." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Freeze Fit Focus</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Empowering you to harness the transformative power of cold exposure, mindful movement, and focused awareness for optimal wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/about/team-working.jpg" 
                alt="The Freeze Fit Focus team"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Freeze Fit Focus was born out of a passion for evidence-based wellness practices and a desire to help people thrive in their daily lives.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                After experiencing the profound benefits of cold exposure, targeted fitness, and mindfulness practices, our founder was inspired to create a platform that would make these powerful tools accessible to everyone.
              </p>
              <p className="text-lg text-gray-700">
                What started as a personal blog has grown into a comprehensive resource hub trusted by thousands of readers seeking science-backed approaches to optimize their physical and mental wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To empower individuals with practical, science-backed knowledge and tools that enhance resilience, performance, and wellbeing through the synergy of cold exposure, intentional fitness, and mental clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Cold Exposure</h3>
              <p className="text-gray-600">
                Making the science and practice of cold therapy accessible and understandable, showing how controlled cold exposure can boost immunity, enhance recovery, and improve mental resilience.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Intentional Fitness</h3>
              <p className="text-gray-600">
                Promoting thoughtful movement practices that focus on functionality, sustainability, and longevity rather than short-term aesthetic goals or unsustainable training methods.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Mental Clarity</h3>
              <p className="text-gray-600">
                Sharing practical mindfulness techniques and cognitive strategies that enhance focus, reduce stress, and create space for peak performance in all areas of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based Approach</h3>
                <p className="text-gray-600">
                  We believe in science. All our content and recommendations are grounded in peer-reviewed research, clinical evidence, and expert consensus, not anecdotes or trends.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We make complex health and fitness concepts understandable and actionable for everyone, regardless of their starting point or background.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize responsible practice and education about potential risks. Our guidance always emphasizes safety precautions, contraindications, and appropriate progression.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster an inclusive, supportive community where individuals can share experiences, learn from each other, and grow together in their wellness journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Kashyap Golakiya</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  A visionary leader with a passion for health and wellness, Kashyap brings extensive experience in business development and a deep understanding of holistic wellness practices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Harsh Jasani</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Operations</p>
                <p className="text-gray-600">
                  With a strong background in operations management and a commitment to excellence, Harsh ensures our platform delivers the highest quality content and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter for the latest research, tips, and insights on cold exposure, fitness, and mindfulness practices.
          </p>
          <a 
            href="/subscribe" 
            className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default About; 