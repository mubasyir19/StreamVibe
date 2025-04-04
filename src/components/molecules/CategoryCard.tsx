'use client';

import Image from 'next/image';
import React from 'react';
import Button from '../atoms/button';
import { useRouter } from 'next/navigation';

interface CategoryCardProps {
  id: string;
  linkImage: string;
  title: string;
  linkPage: string;
}

export default function CategoryCard({ id, linkImage, title, linkPage }: CategoryCardProps) {
  const router = useRouter();
  return (
    <div id={id} className='p-5 lg:p-6 bg-black-10 border border-black-15 rounded-lg'>
      <div className='relative w-48 h-52'>
        <Image src={linkImage} width={193} height={210} alt='category' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-lg'></div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-white text-sm font-semibold'>{title}</p>
        <Button style='' action={() => router.push(linkPage)}>
          <svg
            width='12'
            height='11'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-6'
          >
            <path
              d='M6 12H18M18 12L13 7M18 12L13 17'
              stroke='#fff'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
