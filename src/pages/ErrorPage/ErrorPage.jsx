import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f5c4a] via-[#2f7d65] to-[#3fa989] text-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold mb-4">404</h1>
         <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

         <p className="text-gray-200 mb-6">
          The page you are looking for might have been removed or doesn't exist.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-white text-[#1f5c4a] font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Go Home
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;