import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Directrice Marketing, TechVision',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Notre collaboration avec AgencyPro a complètement transformé notre présence en ligne. Depuis le lancement de notre nouveau site, nous avons constaté une augmentation de 45% du trafic et de 30% des conversions. Leur expertise en UX et en SEO est exceptionnelle.',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas Laurent',
      role: 'PDG, EcoSolutions',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Nous cherchions une agence capable de comprendre notre vision et de la traduire en une présence web moderne. AgencyPro a non seulement créé un site magnifique, mais ils ont également mis en place une stratégie digitale complète qui a propulsé notre croissance.',
      rating: 5
    },
    {
      id: 3,
      name: 'Émilie Moreau',
      role: 'Fondatrice, StyleShop',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Le lancement de notre boutique en ligne a été un véritable succès grâce à AgencyPro. Leur équipe a été à l\'écoute de nos besoins et a créé une plateforme e-commerce intuitive et élégante qui reflète parfaitement notre marque. Le résultat a dépassé toutes nos attentes !',
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-blue-50 rounded-full text-[#00AEEF] font-semibold text-sm mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que nos <span className="text-[#002D62]">clients disent</span> de nous
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Découvrez les expériences de nos clients et comment nous les avons aidés à atteindre leurs objectifs.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark */}
          <svg
            className="absolute text-[#002D62] opacity-10 top-0 left-0 transform -translate-x-6 -translate-y-8 h-24 w-24"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>

          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border-4 border-[#00AEEF]"
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {renderStars(currentTestimonial.rating)}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div className="font-bold text-gray-900">{currentTestimonial.name}</div>
                <div className="text-[#00AEEF]">{currentTestimonial.role}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? 'bg-[#002D62]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 md:-left-12">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg text-gray-700 hover:text-[#002D62] transition-colors focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 md:-right-12">
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg text-gray-700 hover:text-[#002D62] transition-colors focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Logos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Client {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
