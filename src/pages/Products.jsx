import React, { useState, useMemo } from 'react';
import { phones } from '../data/phones';
import PhoneCard from '../components/PhoneCard/PhoneCard';

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const brands = useMemo(() => {
    return ['all', ...new Set(phones.map(phone => phone.brand))];
  }, []);

  const filteredPhones = useMemo(() => {
    let filtered = [...phones];

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(phone => phone.brand === selectedBrand);
    }

    // Price range filter
    switch (priceRange) {
      case 'under-800':
        filtered = filtered.filter(phone => phone.price < 800);
        break;
      case '800-1000':
        filtered = filtered.filter(phone => phone.price >= 800 && phone.price <= 1000);
        break;
      case 'over-1000':
        filtered = filtered.filter(phone => phone.price > 1000);
        break;
      default:
        break;
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedBrand, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Premium Smartphones
        </h1>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brand Filter */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                Brand
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                id="price"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="under-800">Under $800</option>
                <option value="800-1000">$800 - $1000</option>
                <option value="over-1000">Over $1000</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Brand Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPhones.length} {filteredPhones.length === 1 ? 'result' : 'results'}
          </p>
        </div>

        {/* Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhones.map(phone => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>

        {filteredPhones.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">No phones found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;