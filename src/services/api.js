import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const phoneService = {
  // Get all phones with optional filters
  getAllPhones: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await api.get(`/phones?${params}`);
    return response.data;
  },

  // Get a single phone by ID
  getPhoneById: async (id) => {
    const response = await api.get(`/phones/${id}`);
    return response.data;
  },

  // Get phones by brand
  getPhonesByBrand: async (brand) => {
    const response = await api.get(`/brands/${brand}/phones`);
    return response.data;
  },

  // Get all unique brands
  getAllBrands: async () => {
    const response = await api.get('/brands');
    return response.data;
  },
};

export const cartService = {
  // Add item to cart (this would typically interact with a cart API endpoint)
  addToCart: async (phoneId, quantity = 1) => {
    // This is a placeholder for cart functionality
    // You would typically send this to your cart API endpoint
    console.log('Adding to cart:', { phoneId, quantity });
    return { success: true };
  },

  // Remove item from cart
  removeFromCart: async (phoneId) => {
    // This is a placeholder for cart functionality
    console.log('Removing from cart:', phoneId);
    return { success: true };
  },

  // Update cart item quantity
  updateCartItemQuantity: async (phoneId, quantity) => {
    // This is a placeholder for cart functionality
    console.log('Updating quantity:', { phoneId, quantity });
    return { success: true };
  },
};

export default api;