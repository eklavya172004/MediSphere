// src/pages/About.jsx
import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'Patient Management',
    description: 'Efficiently handle patient registrations, maintain comprehensive medical histories, and ensure quick access to vital information, enhancing patient care and administrative workflows.',
    icon: '🧑‍⚕️',
  },
  {
    title: 'Medicine Management',
    description: 'Streamline the prescription process, manage medication inventories, and ensure accurate dispensing, reducing errors and improving patient safety.',
    icon: '💊',
  },
  {
    title: 'Medical Records',
    description: 'Maintain secure and organized electronic medical records (EMRs), facilitating easy retrieval of patient data, test results, and treatment histories for informed decision-making.',
    icon: '📁',
  },
  {
    title: 'Inventory Control',
    description: 'Monitor and manage medical supplies and equipment inventories in real-time, ensuring optimal stock levels and minimizing wastage.',
    icon: '📦',
  },
  {
    title: 'Ambulance Services',
    description: 'Coordinate ambulance dispatch efficiently, track vehicle locations, and manage emergency responses to provide timely patient transportation.',
    icon: '🚑',
  },
  {
    title: 'Diagnostic Services',
    description: 'Integrate laboratory and diagnostic services, allowing for seamless ordering of tests, tracking of results, and communication between departments.',
    icon: '🧪',
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7e4e5c45f9"
          alt="Healthcare"
          className="w-full h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Empowering Healthcare with Technology</h1>
          <p className="text-lg mt-4 max-w-2xl">
            MediSphere revolutionizes how hospitals, doctors, and patients connect — efficiently and intelligently.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          To create a seamless and smart healthcare experience through innovative solutions that simplify patient care,
          empower medical staff, and streamline hospital operations.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <Link href="/" passHref>
                <h3 className="text-xl font-semibold mb-2 text-blue-500 hover:underline">{feature.title}</h3>
              </Link>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
