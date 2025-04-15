export default function About() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
            
            {/* Main Introduction */}
            <section className="mb-12">
                <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                    Welcome to our premium mobile phone destination! Since 2020, we've been your trusted source for the latest and greatest in mobile technology. Our mission is to provide an unparalleled shopping experience, offering a carefully curated selection of smartphones that cater to all needs and preferences.
                </p>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Expert Knowledge</h3>
                        <p className="text-gray-600">Our team consists of tech enthusiasts and mobile device experts who stay up-to-date with the latest industry trends and innovations.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                        <p className="text-gray-600">We partner directly with manufacturers to ensure all our products are genuine and come with full warranties.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Price Match Promise</h3>
                        <p className="text-gray-600">We offer competitive prices and will match any legitimate price from authorized retailers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                        <p className="text-gray-600">Our dedicated support team is available 7 days a week to assist you with any questions or concerns.</p>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>Extensive product testing and verification before listing</li>
                        <li>Detailed, honest product descriptions and specifications</li>
                        <li>30-day money-back guarantee on all purchases</li>
                        <li>Free technical support for all products</li>
                        <li>Regular price updates to ensure competitive offerings</li>
                        <li>Secure payment processing and data protection</li>
                    </ul>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                    Have questions? We'd love to hear from you. Our team is always ready to help!
                </p>
                <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
}