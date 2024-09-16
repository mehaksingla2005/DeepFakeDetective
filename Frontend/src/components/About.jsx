import React from 'react';
import { Shield, Eye, Cpu, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Deepfake Detective
            </h1>
            <p className="text-xl mb-8">
              Empowering truth in the digital age through cutting-edge AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-8">
              At Deepfake Detective, our mission is to safeguard digital integrity and promote trust in visual media. 
              In an era where artificial intelligence can manipulate videos with unprecedented realism, we stand as a 
              bulwark against misinformation and digital deception.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
            <p className="text-gray-700 mb-8">
              Deepfake Detective employs state-of-the-art AI techniques to analyze and detect face-swap deepfake videos. 
              Our system leverages a powerful combination of Convolutional Neural Networks (CNNs) and Recurrent Neural 
              Networks (RNNs) to scrutinize both spatial and temporal inconsistencies in uploaded videos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <FeatureCard
                icon={Eye}
                title="Advanced Visual Analysis"
                description="Our CNNs meticulously examine each frame for subtle visual inconsistencies that may elude the human eye."
              />
              <FeatureCard
                icon={Cpu}
                title="Temporal Inconsistency Detection"
                description="RNNs analyze the video sequence to identify unnatural movements and temporal anomalies characteristic of deepfakes."
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
            <p className="text-gray-700 mb-8">
              As deepfake technology becomes more sophisticated and accessible, the potential for its misuse grows. 
              From political disinformation to personal defamation, the implications are far-reaching. Deepfake Detective 
              provides a crucial tool in the fight against digital deception, helping to maintain trust in our increasingly 
              digital world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={Shield}
                title="Protecting Truth"
                description="We help safeguard the integrity of digital media, crucial for maintaining trust in our information ecosystem."
              />
              <FeatureCard
                icon={Users}
                title="Empowering Users"
                description="By providing accessible deepfake detection tools, we empower individuals to verify the authenticity of digital content."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;