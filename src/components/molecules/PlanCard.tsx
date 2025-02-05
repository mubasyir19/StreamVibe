import React from 'react';

interface PlanCardProps {
  title: string;
  description: string;
  price: number;
  unit: string;
}

export default function PlanCard({ title, description, price, unit }: PlanCardProps) {
  return (
    <div id='plan' className='bg-black-10 p-6 border border-black-15 rounded-xl'>
      <h3 className='text-white font-bold text-lg'>{title}</h3>
      <p className='mt-2.5 text-sm text-grey-60'>{description}</p>
      <h1 className='mt-7 text-white font-semibold text-2xl'>
        ${price} <span className='text-sm text-grey-60'>/{unit}</span>
      </h1>
      <div className='mt-7 flex md:flex-col lg:flex-row gap-3'>
        <button className='flex-1 bg-black-08 border border-black-15 text-white py-3 px-5 rounded-md font-semibold text-sm'>
          Start Free Trial
        </button>
        <button className='flex-1 bg-red-45 text-white py-3 px-5 rounded-md font-semibold text-sm'>Choose Plan</button>
      </div>
    </div>
  );
}
