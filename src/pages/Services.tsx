import { Cloud, Microscope, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Weather Report',
      description: 'Real-time weather insights tailored to farmer location',
      features: [
        '7-day detailed weather forecasts',
        'Location-specific microclimatic data',
        'Agricultural weather advisories',
        'Rainfall predictions and alerts',
        'Temperature and humidity monitoring',
        'Wind speed and direction tracking'
      ],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      color: 'blue'
    },
    {
      icon: Microscope,
      title: 'Soil Analysis',
      description: 'Data-driven soil health monitoring',
      features: [
        'Comprehensive nutrient analysis',
        'pH level monitoring',
        'Soil moisture content tracking',
        'Fertilizer recommendations',
        'Crop suitability assessments',
        'Historical soil data trends'
      ],
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
      color: 'amber'
    },
    {
      icon: AlertTriangle,
      title: 'Early Alert System',
      description: 'Flood, pest, and locust warnings before damage occurs',
      features: [
        'Real-time disaster monitoring',
        'Pest and disease outbreak alerts',
        'Locust swarm early warnings',
        'Flood and drought predictions',
        'Emergency response guidelines',
        'Community-wide alert distribution'
      ],
      image: 'weatherwarning.jpg',
      color: 'red'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to transform farming through technology and data-driven insights
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-gradient-to-r from-green-900 to-green-700 p-3 rounded-lg w-fit mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/pricing"
                    className="bg-gradient-to-r from-green-900 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-800 hover:to-green-600 transition-all duration-300 inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start benefiting from SRAAS services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sign Up', description: 'Create your account and provide farm location details' },
              { step: '02', title: 'Setup', description: 'Configure your preferences and crop information' },
              { step: '03', title: 'Monitor', description: 'Receive real-time data and insights' },
              { step: '04', title: 'Act', description: 'Implement recommendations and improve yields' },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-green-900 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-green-300 mx-auto transform -translate-x-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using SRAAS to increase productivity and protect their crops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
            >
              View Pricing Plans
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;