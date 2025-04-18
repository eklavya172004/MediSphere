// import Image from "next/image";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black">
      <Hero />

      {/* Features Section */}
      {/* Features Section */}
<section className="py-20 bg-gray-100 text-black">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose MediSphere?
    </h2>
    <div className="grid md:grid-cols-3 gap-12">
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-black mb-4">Patient Management</h3>
        <p className="text-gray-700">
          Maintain patient profiles, medical history, and real-time updates for better care.
        </p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-black mb-4">Appointment Scheduling</h3>
        <p className="text-gray-700">
          Streamline doctor appointments with automated scheduling and reminders.
        </p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-black mb-4">Billing & Payments</h3>
        <p className="text-gray-700">
          Transparent billing systems and seamless payment integration for hospitals.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About MediSphere</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            MediSphere is a comprehensive healthcare management platform designed to modernize patient care and operational efficiency. 
            We connect patients, doctors, and hospitals under one smart ecosystem, ensuring better outcomes and better experiences.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Join hundreds of institutions revolutionizing their healthcare services with MediSphere.
          </p>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 MediSphere. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition">Privacy Policy</a>
            <a href="#" className="hover:text-black transition">Terms of Service</a>
            <a href="#" className="hover:text-black transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
