import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // This would typically come from your cart context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      brand: 'iPhone',
      model: '14 Pro Max',
      price: 1099.99,
      quantity: 1,
      image: '/images/iphone-14-pro.jpg',
      color: 'Deep Purple'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 0 ? 29.99 : 0;
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Looks like you haven't added any phones yet!</p>
          <Link
            to="/products"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-6">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={`${item.brand} ${item.model}`}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="ml-6 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {item.brand} {item.model}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">Color: {item.color}</p>
                          </div>
                          <p className="text-lg font-medium text-gray-900">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <label htmlFor={`quantity-${item.id}`} className="mr-3 text-sm text-gray-700">
                              Quantity:
                            </label>
                            <select
                              id={`quantity-${item.id}`}
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                              {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="text-gray-900">${subtotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="text-gray-900">${shipping.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Tax</dt>
                  <dd className="text-gray-900">${tax.toLocaleString()}</dd>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <dt className="text-lg font-semibold text-gray-900">Total</dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    ${total.toLocaleString()}
                  </dd>
                </div>
              </dl>
              <button
                className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700"
                onClick={() => {/* Handle checkout */}}
              >
                Proceed to Checkout
              </button>
              <Link
                to="/products"
                className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-800"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;