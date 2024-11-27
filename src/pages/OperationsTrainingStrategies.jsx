import React from 'react';

const OperationsTrainingStrategies = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center p-5 w-full  text-black">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold hover:text-yellow-400">
            Operations Training & Strategies
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Transform your operations with our tailored strategies. Our training
            programs focus on optimizing processes, enhancing efficiency, and
            empowering your team to excel in dynamic environments.
          </p>
        </div>
      </section>
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-black-700 text-lg">
              <li>
                Process Optimization: Streamline operations for maximum
                efficiency.
              </li>
              <li>
                Leadership Development: Equip leaders with practical tools for
                success.
              </li>
              <li>
                Change Management: Foster adaptability and resilience in your
                workforce.
              </li>
              <li>
                Custom Solutions: Tailored training to address your unique
                challenges.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Operations Training"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-blue-50 p-10 text-center">
        <h2 className="text-3xl font-bold text-amber-600">
          Key Benefits of Our Training
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            <h3 className="font-bold text-lg text-amber-500">
              Enhanced Productivity
            </h3>
            <p className="mt-2 text-black-600">
              Empower your team to work smarter and achieve more in less time.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg  hover:bg-violet-600 rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            <h3 className="font-bold text-lg text-amber-500">
              Improved Communication
            </h3>
            <p className="mt-2 text-black-600">
              Strengthen collaboration and create a cohesive team environment.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            <h3 className="font-bold text-lg text-amber-500">
              Increased Profitability
            </h3>
            <p className="mt-2 text-black-600">
              Leverage efficient processes to maximize revenue and minimize
              waste.
            </p>
          </div>
        </div>
      </section>
      <section className="p-10  bg-gradient-to-r from-amber-100 via-amber-600 to-yellow-300 text-white text-center">
        <h2 className="text-3xl font-bold text-black">
          Ready to Transform Your Operations?
        </h2>
        <p className="mt-3 text-lg  text-black">
          Join us to drive operational excellence and position your organization
          for long-term success.
        </p>
      </section>
    </div>
  );
};

export default OperationsTrainingStrategies;
