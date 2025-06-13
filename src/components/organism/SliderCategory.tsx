'use client';

import React, { useRef } from 'react';
import CategoryCard from '../molecules/CategoryCard';
import { categoryMovie } from '@/services/category';

export default function SliderCategory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: direction === 'left' ? -500 : 500, behavior: 'smooth' });
    }
  };

  return (
    <section className='px-4 mt-24 lg:px-20'>
      <div className='flex items-center justify-between'>
        <div className=''>
          <h3 className='text-white font-bold text-2xl lg:text-3xl'>Explore our wide variety of categories</h3>
          <p className='text-sm text-grey-60 mt-2 lg:text-base'>
            Whether you&apos;re looking for a comedy to make you laugh, a drama to make you think, or a documentary to
            learn something new
          </p>
        </div>
        <div className='flex gap-3 bg-black p-2'>
          <button
            onClick={() => handleScroll('left')}
            className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
          >{`<-`}</button>
          <button
            onClick={() => handleScroll('right')}
            className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
          >{`->`}</button>
        </div>
      </div>
      <div ref={containerRef} className='w-full mt-14 overflow-x-hidden flex scroll-smooth space-x-4'>
        {categoryMovie.map((item) => (
          <CategoryCard
            key={item.id}
            id={item.id}
            linkImage={`/images/${item.image_path}`}
            title={item.title}
            linkPage={`#`}
          />
        ))}
      </div>
    </section>
  );
}
