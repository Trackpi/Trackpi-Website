import React from 'react';
import { FaBullhorn, FaChartLine, FaRegHandshake } from 'react-icons/fa'; 

const MarketPositioning = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center p-8 w-full ">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-600 hover:text-yellow-500">
            Market Positioning & Branding
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-700">
            Our customized market positioning strategies will elevate your brand and
            carve a unique identity in the marketplace. We focus on the power of
            differentiation, ensuring your products stand out and resonate with your
            target audience.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-center p-8 bg-yellow-100">
        <div className="max-w-sm bg-white p-6 m-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <FaBullhorn className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-yellow-600 text-center">
            Tailored Strategy
          </h3>
          <p className="text-gray-700 text-center mt-3">
            We design personalized strategies that cater specifically to your market's needs,
            ensuring that your brand's message is impactful and long-lasting.
          </p>
        </div>

        <div className="max-w-sm bg-white p-6 m-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <FaChartLine className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-yellow-600 text-center">
            Data-Driven Insights
          </h3>
          <p className="text-gray-700 text-center mt-3">
            Our approach integrates in-depth market research and analytics to guide decision-making,
            helping you understand your target audience and market trends.
          </p>
        </div>

        <div className="max-w-sm bg-white p-6 m-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <FaRegHandshake className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-yellow-600 text-center">
            Building Brand Loyalty
          </h3>
          <p className="text-gray-700 text-center mt-3">
            We focus on building long-term relationships with your customers by consistently delivering
            valuable experiences that enhance customer loyalty and trust in your brand.
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center p-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-yellow-600">
            Building a Stronger Brand Identity
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            Our comprehensive branding techniques focus on visual storytelling and establishing a consistent
            brand presence across all channels. The goal is to foster brand loyalty while positioning you as
            a thought leader in your industry.
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Branding Image"
            className="mt-6 w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default MarketPositioning;
