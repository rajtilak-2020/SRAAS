import { Brain, Zap, AlertTriangle, TrendingUp, Shield, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Predictions',
      description: 'Advanced machine learning algorithms analyze weather patterns, soil conditions, and historical data to provide accurate predictions and recommendations.',
      benefits: ['98% prediction accuracy', 'Personalized insights', 'Continuous learning'],
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'Get instant access to critical farming data including weather conditions, soil moisture, and crop health monitoring through our responsive platform.',
      benefits: ['Live data updates', 'Mobile accessibility', 'Instant notifications'],
    },
    {
      icon: AlertTriangle,
      title: 'Early Disaster Alerts',
      description: 'Comprehensive warning system for floods, droughts, pest attacks, and locust swarms with actionable prevention strategies.',
      benefits: ['24/7 monitoring', 'Multi-channel alerts', 'Prevention guidelines'],
    },
    {
      icon: TrendingUp,
      title: 'Boosted Crop Yield',
      description: 'Optimize your farming practices with data-driven recommendations that have proven to increase crop yields by up to 25%.',
      benefits: ['25% average increase', 'Resource optimization', 'Quality improvement'],
    },
    {
      icon: Shield,
      title: 'Reduced Losses',
      description: 'Minimize crop losses through early detection of problems and timely interventions based on scientific analysis.',
      benefits: ['80% loss reduction', 'Risk mitigation', 'Insurance support'],
    },
    {
      icon: Globe,
      title: 'Community Impact',
      description: 'Connect with a network of farmers, share knowledge, and contribute to sustainable agricultural practices in your region.',
      benefits: ['Knowledge sharing', 'Community support', 'Regional insights'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Features & Benefits</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover how SRAAS transforms farming through cutting-edge technology and data-driven solutions
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-r from-green-900 to-green-700 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Powered by Advanced Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a robust technology stack designed for reliability, scalability, and accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Artificial Intelligence', description: 'Machine learning algorithms for predictive analytics' },
              { name: 'IoT Sensors', description: 'Real-time data collection from field devices' },
              { name: 'Satellite Data', description: 'High-resolution imagery and weather monitoring' },
              { name: 'Cloud Computing', description: 'Scalable infrastructure for data processing' },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                  <div className="bg-gradient-to-r from-green-900 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Impact, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how SRAAS is transforming agriculture across communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '10,000+', label: 'Farmers Served', icon: Globe },
              { metric: '25%', label: 'Average Yield Increase', icon: TrendingUp },
              { metric: '80%', label: 'Reduction in Crop Losses', icon: Shield },
              { metric: '99.9%', label: 'System Uptime', icon: Zap },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-gradient-to-r from-green-900 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Sustainability & Environmental Impact</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our commitment to sustainable farming practices that protect the environment while boosting productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Water Conservation',
                description: 'Smart irrigation recommendations reduce water usage by up to 30% while maintaining optimal crop health.',
                impact: '30% water savings'
              },
              {
                title: 'Reduced Chemical Usage',
                description: 'Precision application guidelines minimize fertilizer and pesticide use, protecting soil and water systems.',
                impact: '40% reduction in chemicals'
              },
              {
                title: 'Carbon Footprint',
                description: 'Optimized farming practices and reduced waste contribute to lower greenhouse gas emissions.',
                impact: '20% carbon reduction'
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-green-100 mb-4">{item.description}</p>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;