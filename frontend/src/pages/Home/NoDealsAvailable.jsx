import React from 'react';

const NoDealsAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-600">No Deals Right Now</h2>
      <p className="mt-2 text-gray-500">Please check back later for exciting offers!</p>
    </div>
  );
};

export default NoDealsAvailable;
