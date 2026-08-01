import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-8 bg-white dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} AI Career Guidance System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
