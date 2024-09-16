import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Upload, BarChart2 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Welcome to Deepfake Detective
            </h1>
            <p className="text-xl mb-8">
              Our AI-powered system helps you detect face-swap deepfake videos with unparalleled accuracy.
            </p>
            <Link
              to="/upload"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Upload}
              title="Upload Your Video"
              description="Simply upload the video you want to analyze. We support various formats and sizes."
            />
            <FeatureCard
              icon={Shield}
              title="Advanced AI Analysis"
              description="Our state-of-the-art AI algorithms scan the video for signs of manipulation."
            />
            <FeatureCard
              icon={BarChart2}
              title="Detailed Results"
              description="Receive a comprehensive report on the authenticity of your video."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Detect Deepfakes?</h2>
          <p className="text-xl mb-8">
            Start using our advanced deepfake detection tool today and ensure the authenticity of your videos.
          </p>
          <Link
            to="/upload"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Try It Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;