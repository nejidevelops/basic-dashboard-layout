// src/components/Widget.jsx
import React from 'react';

const Widget = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Widget;
