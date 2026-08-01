import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
