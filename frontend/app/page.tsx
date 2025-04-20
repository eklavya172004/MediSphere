// import Image from "next/image";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Choose MediSphere?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">Patient Management</h3>
              <p className="text-gray-700 text-lg">
                Maintain patient profiles, medical history, and real-time updates for better care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">Appointment Scheduling</h3>
              <p className="text-gray-700 text-lg">
                Streamline doctor appointments with automated scheduling and reminders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">Billing & Payments</h3>
              <p className="text-gray-700 text-lg">
                Transparent billing systems and seamless payment integration for hospitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About MediSphere</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            MediSphere is a comprehensive healthcare management platform designed to modernize patient care and operational efficiency. 
            We connect patients, doctors, and hospitals under one smart ecosystem, ensuring better outcomes and better experiences.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-lg text-gray-600 mb-4">"MediSphere has completely transformed our hospital's workflow, making our patient care more efficient and streamlined."</p>
              <p className="font-semibold text-gray-800">Dr. Alice Johnson</p>
              <p className="text-sm text-gray-500">Chief Medical Officer, Hospital Group</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-lg text-gray-600 mb-4">"With MediSphere, our clinic has seen a reduction in administrative costs and improved appointment management."</p>
              <p className="font-semibold text-gray-800">Dr. Michael Smith</p>
              <p className="text-sm text-gray-500">Owner, City Clinic</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-lg text-gray-600 mb-4">"The billing system in MediSphere is simple and transparent, which has significantly improved our revenue cycle."</p>
              <p className="font-semibold text-gray-800">Sarah Lee</p>
              <p className="text-sm text-gray-500">Finance Manager, HealthCare Corp</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What features does MediSphere offer?</h3>
              <p className="text-lg text-gray-700">
                MediSphere offers comprehensive features like patient management, appointment scheduling, and billing integration to streamline healthcare operations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">How secure is patient data?</h3>
              <p className="text-lg text-gray-700">
                We adhere to the highest standards of data security and privacy, ensuring that all patient data is protected according to industry regulations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Can I integrate MediSphere with my existing system?</h3>
              <p className="text-lg text-gray-700">
                Yes, MediSphere is designed to seamlessly integrate with existing healthcare management systems to provide a unified experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? Reach out to us and our team will be happy to assist you!
          </p>
          <form className="max-w-3xl mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
              rows={6}
            />
            <button
              type="submit"
              className="px-10 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Join hundreds of institutions revolutionizing their healthcare services with MediSphere.
          </p>
          <button className="px-10 py-6 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-gray-600">
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
