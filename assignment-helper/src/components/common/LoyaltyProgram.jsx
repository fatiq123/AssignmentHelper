import React from 'react';
import { motion } from 'framer-motion';
import { Award, Gift, TrendingUp, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const LoyaltyProgram = () => {
  const tiers = [
    {
      name: "Bronze",
      orders: "1-3 orders",
      discount: "5% discount",
      icon: <Award className="h-10 w-10 text-amber-700" />,
      color: "from-amber-700 to-amber-500",
      benefits: [
        "5% discount on all orders",
        "Priority email support",
        "Free plagiarism report"
      ]
    },
    {
      name: "Silver",
      orders: "4-7 orders",
      discount: "10% discount",
      icon: <Award className="h-10 w-10 text-gray-400" />,
      color: "from-gray-400 to-gray-300",
      benefits: [
        "10% discount on all orders",
        "Priority email & chat support",
        "Free plagiarism report",
        "Extended revision period"
      ]
    },
    {
      name: "Gold",
      orders: "8-12 orders",
      discount: "15% discount",
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      color: "from-yellow-500 to-yellow-300",
      benefits: [
        "15% discount on all orders",
        "VIP support with dedicated manager",
        "Free plagiarism report",
        "Extended revision period",
        "Free formatting"
      ]
    },
    {
      name: "Platinum",
      orders: "13+ orders",
      discount: "20% discount",
      icon: <Award className="h-10 w-10 text-blue-600" />,
      color: "from-blue-600 to-blue-400",
      benefits: [
        "20% discount on all orders",
        "VIP support with dedicated manager",
        "Free plagiarism report",
        "Unlimited revision period",
        "Free formatting",
        "Priority assignment to top experts"
      ]
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Increasing Discounts",
      description: "The more assignments you order, the higher your discount percentage becomes."
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Special Bonuses",
      description: "Receive special bonuses and free add-ons as you progress through loyalty tiers."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Referral Rewards",
      description: "Earn additional discounts when you refer friends to our services."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Loyalty Program" 
          subtitle="Earn discounts and benefits with every order you place" 
        />
        
        <div className="mt-12">
          {/* Program Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Loyalty Tiers */}
          <h3 className="text-2xl font-bold text-center mb-8">Our Loyalty Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-6 text-white text-center`}>
                  <div className="mx-auto bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="opacity-90">{tier.orders}</p>
                  <p className="text-lg font-semibold mt-2">{tier.discount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Referral Program */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Refer a Friend Program</h3>
                <p className="text-gray-700 mb-4">
                  Refer your friends to AssignmentHelper and earn rewards! For each friend who places an order, you'll receive a 10% discount on your next order, and your friend will get a 5% discount on their first order.
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 md:mb-0">
                  <p className="text-gray-700 font-medium">Your Referral Code:</p>
                  <div className="flex items-center mt-2">
                    <span className="bg-gray-100 px-4 py-2 rounded-l-md font-mono text-lg">FRIEND10</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://img.freepik.com/free-vector/refer-friend-concept-illustration_114360-7129.jpg" 
                  alt="Refer a friend" 
                  className="w-full max-w-xs rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Earning Rewards?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Place your first order today and begin your journey through our loyalty program tiers.
            </p>
            <a 
              href="/get-quote" 
              className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
