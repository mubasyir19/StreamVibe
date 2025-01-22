import Image from 'next/image';
import React from 'react';

interface CardDeviceProps {
  Subtitle: string;
  description: string;
  sourceImage: string;
  widthImage: number;
  heightImage: number;
}

export const CardDevice = ({ Subtitle, description, sourceImage, widthImage, heightImage }: CardDeviceProps) => {
  return (
    <div className='card border border-black-15 bg-black-06 p-6 rounded-lg'>
      <div className='flex items-center gap-x-2.5'>
        <div className='border border-black-12 bg-black-08 p-2.5 rounded-lg'>
          <Image src={sourceImage} width={widthImage} height={heightImage} alt='icons' />
        </div>
        <h4 className='text-white font-semibold text-lg lg:text-xl'>{Subtitle}</h4>
      </div>
      <p className='mt-5 text-grey-60 text-sm lg:text-base'>{description}</p>
    </div>
  );
};
