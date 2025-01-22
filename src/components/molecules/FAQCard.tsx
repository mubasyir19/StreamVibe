import React from 'react';

interface FAQCardProps {
  listNumber: string;
  question: string;
  answer?: string;
}

export default function FAQCard({ listNumber, question, answer }: FAQCardProps) {
  return (
    <div id='faq' className='py-5 px-2.5'>
      <div id='header-faq' className='flex gap-x-4 items-center'>
        <div className='bg-black-12 h-11 w-auto border border-black-15 p-3 text-white font-semibold text-base rounded-md'>
          {listNumber}
        </div>
        <h2 className='flex-1 text-white text-lg font-medium'>{question}</h2>
        <button className='text-white text-3xl font-medium'>+</button>
      </div>
      <div id='content-faq' className='mt-3'>
        <p className='text-sm text-grey-60'>{answer}</p>
      </div>
    </div>
  );
}
