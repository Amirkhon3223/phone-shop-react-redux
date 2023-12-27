import React from 'react';

interface propsType {
  icon: React.ReactNode,
  title: string,
  desc: string
}

const FeatureCard = ({icon, title, desc}: propsType) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-3 py-4">
      {icon}
      <div>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-gray-600 text-md">{desc}</p>
      </div>
    </div>
  );
};


export default FeatureCard;