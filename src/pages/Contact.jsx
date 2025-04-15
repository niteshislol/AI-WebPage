import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;