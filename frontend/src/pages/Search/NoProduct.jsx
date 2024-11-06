import React from 'react';

const NoProduct = () => {
    return (
        <div className="flex items-center justify-center h-40 bg-white shadow rounded-lg p-6">
          <p className="text-gray-500 text-lg">No products match your search query.</p>
        </div>
    );
};

export default NoProduct;