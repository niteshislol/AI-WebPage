import React from 'react';
import { Link } from 'react-router-dom';
import { phones } from '../data/phones';

const Home = () => {
  const featuredPhones = phones.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/images/hero-bg.jpg"
            alt="Latest smartphones"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Latest Smartphones
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our collection of premium phones from top brands.
            Find the perfect device that matches your style and needs.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Phones */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Phones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPhones.map((phone) => (
            <div key={phone.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img
                  src={phone.image}
                  alt={`${phone.brand} ${phone.model}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{phone.brand} {phone.model}</h3>
                <p className="mt-2 text-gray-600">{phone.specs.display}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ${phone.price.toLocaleString()}
                  </span>
                  <Link
                    to={`/phones/${phone.id}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Showcase */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Brands We Carry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Nothing'].map((brand) => (
              <div
                key={brand}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
              >
                <span className="text-xl font-semibold text-gray-900">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Free Shipping',
              description: 'On orders over $999',
              icon: (
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              ),
            },
            {
              title: '24/7 Support',
              description: 'Expert assistance anytime',
              icon: (
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
            },
            {
              title: 'Secure Payment',
              description: '100% protected checkout',
              icon: (
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to find your perfect phone?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Browse our collection and get the latest smartphones at great prices.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Phones
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;