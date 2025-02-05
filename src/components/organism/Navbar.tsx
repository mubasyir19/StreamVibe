import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='hidden lg:flex justify-between items-center py-4 px-20'>
      <div className=''>
        <Image src='/images/main-logo.png' width={165} height={50} alt='main logo' />
      </div>
      <div className='bg-black-06 border-4 border-black-12 rounded-xl p-2'>
        <ul className='flex items-center gap-x-4'>
          <li className='text-sm bg-black-10 text-white px-5 py-3 rounded-lg'>
            <Link href='#'>Home</Link>
          </li>
          <li className='text-sm bg-black-10 text-white px-5 py-3 rounded-lg'>
            <Link href='#'>Movies & Shows</Link>
          </li>
          <li className='text-sm bg-black-10 text-white px-5 py-3 rounded-lg'>
            <Link href='#'>Support</Link>
          </li>
          <li className='text-sm bg-black-10 text-white px-5 py-3 rounded-lg'>
            <Link href='#'>Subscriptions</Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-x-9'>
        <button>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19 19L13.8033 13.8033M13.8033 13.8033C15.1605 12.4461 16 10.5711 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16C10.5711 16 12.4461 15.1605 13.8033 13.8033Z'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.8569 15.0817C14.7514 14.857 16.5783 14.4116 18.3111 13.7719C16.8743 12.177 15.9998 10.0656 15.9998 7.75V7.04919C15.9999 7.03281 16 7.01641 16 7C16 3.68629 13.3137 1 10 1C6.68629 1 4 3.68629 4 7L3.9998 7.75C3.9998 10.0656 3.12527 12.177 1.68848 13.7719C3.4214 14.4116 5.24843 14.857 7.14314 15.0818M12.8569 15.0817C11.92 15.1928 10.9666 15.25 9.9998 15.25C9.03317 15.25 8.07988 15.1929 7.14314 15.0818M12.8569 15.0817C12.9498 15.3711 13 15.6797 13 16C13 17.6569 11.6569 19 10 19C8.34315 19 7 17.6569 7 16C7 15.6797 7.05019 15.3712 7.14314 15.0818'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
