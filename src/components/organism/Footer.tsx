import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-black py-12 px-4 lg:px-20'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7'>
        <div className=''>
          <p className='text-white font-semibold'>Home</p>
          <ul className='text-white mt-4 flex flex-col gap-y-2'>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Categories</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Devices</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Pricing</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <p className='text-white font-semibold'>Movies</p>
          <ul className='text-white mt-4 flex flex-col gap-y-2'>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Genres</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Trending</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>New Release</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Popular</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <p className='text-white font-semibold'>Shows</p>
          <ul className='text-white mt-4 flex flex-col gap-y-2'>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Genres</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Trending</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>New Release</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Popular</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <p className='text-white font-semibold'>Support</p>
          <ul className='text-white mt-4 flex flex-col gap-y-2'>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <p className='text-white font-semibold'>Subscription</p>
          <ul className='text-white mt-4 flex flex-col gap-y-2'>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Plans</Link>
            </li>
            <li className='text-sm font-medium text-grey-60'>
              <Link href='#'>Features</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <p className='text-white font-semibold'>Connect With Us</p>
          <div className='flex gap-x-2 mt-4'>
            <div className='bg-black p-3 border-2 border-black-15 rounded-md'></div>
            <div className='bg-black p-3 border-2 border-black-15 rounded-md'></div>
            <div className='bg-black p-3 border-2 border-black-15 rounded-md'></div>
          </div>
        </div>
      </div>
      <div className='border-t border-grey-60 mt-12'>
        <div className='mt-5 flex flex-col gap-y-5 md:flex-row md:justify-between'>
          <p className='text-grey-60 text-sm'>@2023 streamVibe, All Rights Reseerved</p>
          <div className='flex gap-x-8'>
            <Link href='#' className='text-grey-60 text-sm'>
              Terms of Use
            </Link>
            <Link href='#' className='text-grey-60 text-sm'>
              Privacy Policy
            </Link>
            <Link href='#' className='text-grey-60 text-sm'>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
