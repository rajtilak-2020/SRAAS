import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for getting started with basic farming insights',
      features: [
        'Limited weather updates',
        'Basic alerts only',
        'Community access',
        'Email support',
        'Mobile app access',
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonStyle: 'border-2 border-green-700 text-green-700 hover:bg-green-50',
    },
    {
      name: 'Standard',
      price: '₹199',
      period: '/month',
      description: 'Advanced features for serious farmers',
      features: [
        'All Free features',
        'Soil analysis reports',
        'Personalized farming insights',
        'Weather forecasting (7 days)',
        'Crop recommendation system',
        'Priority support',
        'Data export capabilities',
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonStyle: 'bg-gradient-to-r from-green-900 to-green-700 text-white hover:from-green-800 hover:to-green-600',
    },
    {
      name: 'Premium',
      price: '₹499',
      period: '/month',
      description: 'Complete solution with early warning systems',
      features: [
        'All Standard features',
        'Full early warning system',
        'Flood & drought predictions',
        'Pest & locust alerts',
        'Advanced AI predictions',
        'Priority community support',
        'Custom reporting',
        'API access',
        '24/7 phone support',
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonStyle: 'bg-gradient-to-r from-green-900 to-green-700 text-white hover:from-green-800 hover:to-green-600',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Choose the perfect plan for your farming needs. Start free and upgrade as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  plan.popular ? 'ring-4 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-900 to-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compare Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of features available in each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-900 to-green-700 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Features</th>
                    <th className="py-4 px-6 text-center">Free</th>
                    <th className="py-4 px-6 text-center">Standard</th>
                    <th className="py-4 px-6 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Weather Updates', free: 'Limited', standard: 'Daily', premium: 'Real-time' },
                    { feature: 'Soil Analysis', free: '✗', standard: 'Monthly', premium: 'Weekly' },
                    { feature: 'Alert System', free: 'Basic', standard: 'Enhanced', premium: 'Complete' },
                    { feature: 'AI Predictions', free: '✗', standard: 'Limited', premium: 'Advanced' },
                    { feature: 'Support', free: 'Email', standard: 'Priority', premium: '24/7 Phone' },
                    { feature: 'API Access', free: '✗', standard: '✗', premium: '✓' },
                    { feature: 'Custom Reports', free: '✗', standard: '✗', premium: '✓' },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row.free}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row.standard}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I upgrade or downgrade my plan anytime?',
                answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.',
              },
              {
                question: 'Is there a free trial for paid plans?',
                answer: 'Yes, we offer a 7-day free trial for both Standard and Premium plans. No credit card required to start.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, debit cards, UPI, and net banking for Indian customers.',
              },
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to paid features until the end of your billing period.',
              },
              {
                question: 'Do you offer discounts for annual payments?',
                answer: 'Yes, we offer a 20% discount when you pay annually instead of monthly for both Standard and Premium plans.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already transforming their agriculture with SRAAS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;