import React from 'react';

export const Error = ({ children }) => {
  return (
    <div
      className="bg-red-500 text-white text-center p-2 mb-2 font-bold 
  uppercase rounded-sm"
    >
      <p>{children}</p>
    </div>
  );
};
