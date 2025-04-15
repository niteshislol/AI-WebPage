import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCard = ({ phone }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={phone.image} 
          alt={`${phone.brand} ${phone.model}`}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!phone.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{phone.brand}</h3>
            <h4 className="text-lg text-gray-700">{phone.model}</h4>
          </div>
          <span className="text-xl font-bold text-blue-600">${phone.price.toLocaleString()}</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Storage:</span>
            <span className="font-medium">{phone.specs.storage}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Camera:</span>
            <span className="font-medium">{phone.specs.camera}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Battery:</span>
            <span className="font-medium">{phone.specs.battery}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {phone.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Link 
            to={`/phones/${phone.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
          <button 
            className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => {/* Add to cart function */}}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;