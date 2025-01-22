import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='hidden lg:flex justify-between items-center'>
      <div className=''></div>
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
      <div className=''></div>
    </nav>
  );
}
