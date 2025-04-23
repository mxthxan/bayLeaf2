import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title text-center">Contact Us</h2>
          <p className="section-subtitle text-center">
            We'd love to hear from you! Reach out to us for reservations, feedback, or any questions you may have.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="font-display text-2xl mb-6 text-gray-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-spice-100 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Wiesenhüttenplatz 25, 60329 Frankfurt am Main, Germany
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spice-100 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+49 (0) 69 123 456 78</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spice-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@madraspalace.de</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spice-100 p-3 rounded-full mr-4">
                    <Clock size={20} className="text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 12:00 - 22:00<br />
                      Saturday - Sunday: 12:00 - 23:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div id="booking" className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="font-display text-2xl mb-6 text-gray-900">Book a Table</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-gray-700 mb-1">Time</label>
                    <select
                      id="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    >
                      <option value="">Select time</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-1">Number of Guests</label>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6+ people</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    placeholder="Any special requests or dietary requirements?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Book Now
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="bg-cream-100 p-6 rounded-lg shadow-md">
            <h3 className="font-display text-2xl mb-4 text-center text-gray-900">Find Us</h3>
            <div className="aspect-w-16 aspect-h-9 h-[300px] md:h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.904658201547!2d8.663693376927796!3d50.10645487153371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea2c90708a9%3A0x79a6db59f4a51632!2sWiesenh%C3%BCttenpl.%2025%2C%2060329%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sus!4v1696456454015!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;