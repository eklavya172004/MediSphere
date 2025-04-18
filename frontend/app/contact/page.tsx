'use client';

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      
      {/* Header */}
      <header className="bg-black text-white py-12 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg opacity-80">We’re here to help you navigate your healthcare needs with ease and confidence.</p>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-10">
        
        {/* Contact Info */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              📍
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p>123 Healthcare Avenue</p>
            <p>Medical District, City 12345</p>
            <p>United States</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              📞
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p>Main Office: (555) 123-4567</p>
            <p>Support Desk: (555) 987-6543</p>
            <p>Emergency: (555) 555-5555</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              ✉
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p>General: info@healthcare.com</p>
            <p>Support: support@healthcare.com</p>
            <p>Admin: admin@healthcare.com</p>
          </div>
        </section>

        {/* Hours */}
        <section className="bg-gray-100 p-8 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Hours of Operation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Administrative Office</h3>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00 AM - 12:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Technical Support</h3>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Monday - Friday</span><span>7:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>10:00 AM - 2:00 PM</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-gray-100 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Our Location</h2>
          <div className="h-64 bg-primary/10 flex items-center justify-center rounded-lg">
            <p>Interactive map will be displayed here</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm opacity-80">© 2025 Healthcare Management System — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContactPage;
