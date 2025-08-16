import { Target, Users, TrendingUp, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About SRAAS</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Revolutionizing agriculture through smart technology and data-driven insights
          </p>
        </div>
      </section>

      {/* What is SRAAS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is SRAAS?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SRAAS (Smart Rural Analytic and Alert System) is an innovative agricultural technology platform 
                that combines artificial intelligence, real-time data analysis, and early warning systems to 
                empower farmers with actionable insights.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our comprehensive solution provides weather monitoring, soil analysis, and disaster prevention 
                tools specifically designed for rural agricultural communities. By leveraging cutting-edge 
                technology, we help farmers make informed decisions that boost productivity while minimizing risks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-900 to-green-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-900 to-green-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg"
                alt="Smart farming technology"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Productivity Increase</div>
                    <div className="text-2xl font-bold text-gray-900">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it all started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It All Started</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the challenges farmers face and the gap SRAAS fills in modern agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problems We Identified</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Unpredictable weather patterns causing crop damage</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Lack of real-time soil health monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Late warnings for pest attacks and natural disasters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Limited access to agricultural technology in rural areas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Decreased productivity due to poor decision-making</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution Approach</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>AI-powered weather prediction with location-specific insights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Real-time soil analysis and health monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Early warning system for disasters and pest attacks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Mobile-first platform accessible to rural communities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Data-driven recommendations for optimal farming practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smart Agriculture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Smart Agriculture is Important</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The future of farming lies in technology-driven solutions that benefit farmers, productivity, and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Benefits to Farmers',
                description: 'Increased income through better crop management, reduced losses from disasters, and access to modern farming techniques.',
                benefits: ['Higher yields', 'Lower costs', 'Risk reduction', 'Better planning']
              },
              {
                icon: TrendingUp,
                title: 'Enhanced Productivity',
                description: 'Optimized resource utilization, precision farming, and data-driven decision making lead to significantly improved productivity.',
                benefits: ['25% yield increase', 'Efficient water use', 'Precision fertilization', 'Timely interventions']
              },
              {
                icon: Leaf,
                title: 'Sustainability Focus',
                description: 'Environmentally responsible farming practices that preserve soil health and reduce environmental impact.',
                benefits: ['Soil conservation', 'Reduced chemicals', 'Water conservation', 'Ecosystem protection']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-green-900 to-green-700 p-3 rounded-lg w-fit mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            "To democratize access to advanced agricultural technology and empower every farmer with 
            the tools and insights needed to achieve sustainable, profitable, and resilient farming practices."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Innovation</div>
              <div className="text-green-200">Cutting-edge technology solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Accessibility</div>
              <div className="text-green-200">Affordable for all farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Impact</div>
              <div className="text-green-200">Transforming rural communities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;