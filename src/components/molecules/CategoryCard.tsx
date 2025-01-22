'use client';

import Image from 'next/image';
import React from 'react';
import Button from '../atoms/button';
import { useRouter } from 'next/navigation';

interface CategoryCardProps {
  linkImage: string;
  title: string;
  linkPage: string;
}

export default function CategoryCard({ linkImage, title, linkPage }: CategoryCardProps) {
  const router = useRouter();
  return (
    <div id='category-card' className='p-5 lg:p-6 bg-black-10 border border-black-15 rounded-lg'>
      <Image src={linkImage} width={193} height={210} alt='category' className='w-full' />
      <div className='flex items-center justify-between'>
        <p className='text-white text-sm font-semibold'>{title}</p>
        <Button style='' action={() => router.push(linkPage)}>
          arrow
        </Button>
      </div>
    </div>
  );
}
