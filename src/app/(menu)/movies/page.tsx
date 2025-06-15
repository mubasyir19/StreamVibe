import Button from '@/components/atoms/button';
import CategoryCard from '@/components/molecules/CategoryCard';
import { categoryMovie } from '@/data/category';
import Image from 'next/image';
import React from 'react';

export default function MoviesPage() {
  return (
    <div className='px-4 lg:px-20'>
      <section className='h-[835px]'>
        <div className='mt-14 relative h-full'>
          <Image
            src={`/films/ironman.jpg`}
            width={1920}
            height={1080}
            alt='avengers'
            className='absolute inset-0 h-full object-cover rounded-xl w-full'
          />
          <div className='absolute inset-0 h-full rounded-xl bg-gradient-to-t from-black to-transparent'></div>
          <div className='title absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-3/4'>
            <h1 className='text-white text-4xl text-center font-bold'>Avengers: Iron Man</h1>
            <p className='text-grey-60 mt-2 text-base text-center'>
              With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos&ops;s
              actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who
              they face... Avenge the fallen.
            </p>
            <div className='flex justify-center mt-7 items-center gap-5'>
              <Button style='primary-button py-2'>Play Now</Button>
              <div className='flex gap-2.5'>
                <button className='flex items-center size-10 rounded-lg justify-center border border-black-15 bg-black-06 text-white text-xl'>
                  +
                </button>
                <button className='flex items-center size-10 rounded-lg justify-center border border-black-15 bg-black-06 text-white text-xl'>
                  -
                </button>
                <button className='flex items-center size-10 rounded-lg justify-center border border-black-15 bg-black-06 text-white text-xl'>
                  *
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative bg-black mt-40 border border-black-15 p-12 rounded-xl'>
        <div className='absolute -top-5 left-10 bg-red-45 text-white font-semibold text-lg px-4 py-2 rounded-lg'>
          Movies
        </div>
        <div className=''>
          <div className='flex items-center justify-between'>
            <h1 className='text-white font-bold text-2xl'>Our Genres</h1>
            <div className='flex gap-3 bg-black border border-black-15 rounded-lg p-2'>
              <button
                // onClick={() => handleScroll('left')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`<-`}</button>
              <button
                // onClick={() => handleScroll('right')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`->`}</button>
            </div>
          </div>
          <div
            // ref={containerRef}
            className='w-full mt-14 overflow-x-hidden flex scroll-smooth space-x-4'
          >
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
        </div>
        <div className='h-24'></div>
        <div className=''>
          <div className='flex items-center justify-between'>
            <h1 className='text-white font-bold text-2xl'>Our Genres</h1>
            <div className='flex gap-3 bg-black border border-black-15 rounded-lg p-2'>
              <button
                // onClick={() => handleScroll('left')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`<-`}</button>
              <button
                // onClick={() => handleScroll('right')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`->`}</button>
            </div>
          </div>
          <div
            // ref={containerRef}
            className='w-full mt-14 overflow-x-hidden flex scroll-smooth space-x-4'
          >
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
        </div>
      </section>
      <section className='relative bg-black mt-40 border border-black-15 p-12 rounded-xl'>
        <div className='absolute -top-5 left-10 bg-red-45 text-white font-semibold text-lg px-4 py-2 rounded-lg'>
          Genres
        </div>
        <div className=''>
          <div className='flex items-center justify-between'>
            <h1 className='text-white font-bold text-2xl'>Our Genres</h1>
            <div className='flex gap-3 bg-black border border-black-15 rounded-lg p-2'>
              <button
                // onClick={() => handleScroll('left')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`<-`}</button>
              <button
                // onClick={() => handleScroll('right')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`->`}</button>
            </div>
          </div>
          <div
            // ref={containerRef}
            className='w-full mt-14 overflow-x-hidden flex scroll-smooth space-x-4'
          >
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
        </div>
        <div className='h-24'></div>
        <div className=''>
          <div className='flex items-center justify-between'>
            <h1 className='text-white font-bold text-2xl'>Our Genres</h1>
            <div className='flex gap-3 bg-black border border-black-15 rounded-lg p-2'>
              <button
                // onClick={() => handleScroll('left')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`<-`}</button>
              <button
                // onClick={() => handleScroll('right')}
                className='bg-black-10 flex items-center text-lg size-8 justify-center text-white font-bold'
              >{`->`}</button>
            </div>
          </div>
          <div
            // ref={containerRef}
            className='w-full mt-14 overflow-x-hidden flex scroll-smooth space-x-4'
          >
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
        </div>
      </section>
      <section className='my-20'>
        <div className='bg-background bg-cover bg-center w-full h-80 rounded-xl'>
          <div className='px-7 py-12 bg-gradient-to-b lg:bg-gradient-to-r from-black/90 via-black/80 lg:from-black lg:via-black/90 lg:to-red-45/40 to-red-45/40 w-full h-full rounded-xl flex flex-col lg:flex-row justify-between items-center'>
            <div className='text-center lg:text-start'>
              <h2 className='font-bold text-2xl lg:text-3xl text-white'>
                Start your free trial <br className='lg:hidden' /> today!
              </h2>
              <p className='mt-2 text-grey-60 text-sm lg:text-base'>
                This is a clear and concise call to action that encourages users to sign up for a free trial of
                StreamVibe.
              </p>
            </div>
            <button className='mt-12 md:mt-0 bg-red-45 rounded-lg text-white text-center py-4 px-5 text-sm font-semibold'>
              Start a Free trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
