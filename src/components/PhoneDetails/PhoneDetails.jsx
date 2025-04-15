import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { phones } from '../../data/phones';

const PhoneDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const phone = phones.find(p => p.id === parseInt(id));

  if (!phone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Phone not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/products')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-6">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={phone.image}
                  alt={`${phone.brand} ${phone.model}`}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex gap-4">
                {phone.colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(index)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <span className="sr-only">{color}</span>
                    <div
                      className="h-full w-full rounded-full"
                      style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {phone.brand} {phone.model}
                </h1>
                <p className="mt-2 text-3xl text-blue-600">${phone.price.toLocaleString()}</p>
              </div>

              <div className="border-t border-b border-gray-200 py-4">
                <h2 className="text-lg font-semibold mb-4">Key Specifications</h2>
                <dl className="grid grid-cols-1 gap-y-3">
                  {Object.entries(phone.specs).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="w-32 flex-shrink-0 text-gray-600 capitalize">
                        {key.replace('_', ' ')}:
                      </dt>
                      <dd className="text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Key Features</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {phone.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="quantity" className="mr-4 text-gray-700">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className="w-full bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {/* Add to cart function */}}
                >
                  Add to Cart - ${(phone.price * quantity).toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;