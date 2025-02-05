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
            <Link href={`#`}>
              <div className='bg-black p-3 border-2 border-black-15 rounded-md'>
                <svg
                  width='21'
                  height='20'
                  viewBox='0 0 21 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                >
                  <path
                    d='M20.3335 10C20.3335 4.47715 15.8563 0 10.3335 0C4.81064 0 0.333496 4.47715 0.333496 10C0.333496 14.9912 3.99033 19.1283 8.771 19.8785V12.8906H6.23193V10H8.771V7.79688C8.771 5.29063 10.264 3.90625 12.5481 3.90625C13.6419 3.90625 14.7866 4.10156 14.7866 4.10156V6.5625H13.5257C12.2835 6.5625 11.896 7.3334 11.896 8.125V10H14.6694L14.2261 12.8906H11.896V19.8785C16.6767 19.1283 20.3335 14.9912 20.3335 10Z'
                    fill='white'
                  />
                </svg>
              </div>
            </Link>
            <Link href={`#`}>
              <div className='bg-black p-3 border-2 border-black-15 rounded-md'>
                <svg
                  width='21'
                  height='18'
                  viewBox='0 0 21 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                >
                  <path
                    d='M6.62529 17.125C14.1706 17.125 18.2987 10.8723 18.2987 5.45155C18.2987 5.27577 18.2948 5.09608 18.287 4.9203C19.0901 4.33955 19.7831 3.62021 20.3335 2.79608C19.5856 3.12883 18.7915 3.34615 17.9784 3.44061C18.8346 2.92742 19.4756 2.12123 19.7827 1.17147C18.9773 1.6488 18.0965 1.98551 17.178 2.16718C16.5592 1.50963 15.741 1.07426 14.8499 0.928376C13.9588 0.782488 13.0445 0.934209 12.2483 1.36008C11.4521 1.78595 10.8183 2.46225 10.445 3.28443C10.0717 4.1066 9.97969 5.02885 10.1831 5.90858C8.55224 5.82674 6.95678 5.40309 5.50015 4.66508C4.04352 3.92708 2.75824 2.8912 1.72764 1.6246C1.20383 2.5277 1.04354 3.59637 1.27936 4.61341C1.51517 5.63045 2.12938 6.51954 2.99717 7.09999C2.34569 7.0793 1.70848 6.9039 1.13818 6.58827V6.63905C1.1376 7.58679 1.46524 8.50549 2.06542 9.23897C2.6656 9.97246 3.50127 10.4755 4.43037 10.6625C3.82688 10.8276 3.19348 10.8517 2.5792 10.7328C2.84138 11.5479 3.35147 12.2607 4.03831 12.7719C4.72514 13.2831 5.55443 13.5672 6.41045 13.5844C4.95718 14.7259 3.16197 15.3451 1.31396 15.3422C0.986235 15.3417 0.658829 15.3216 0.333496 15.282C2.21088 16.4865 4.39477 17.1262 6.62529 17.125Z'
                    fill='white'
                  />
                </svg>
              </div>
            </Link>
            <Link href={`#`}>
              <div className='bg-black p-3 border-2 border-black-15 rounded-md'>
                <svg
                  width='21'
                  height='20'
                  viewBox='0 0 21 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                >
                  <path
                    d='M18.853 0H1.81006C0.993652 0 0.333496 0.644531 0.333496 1.44141V18.5547C0.333496 19.3516 0.993652 20 1.81006 20H18.853C19.6694 20 20.3335 19.3516 20.3335 18.5586V1.44141C20.3335 0.644531 19.6694 0 18.853 0ZM6.26709 17.043H3.29834V7.49609H6.26709V17.043ZM4.78271 6.19531C3.82959 6.19531 3.06006 5.42578 3.06006 4.47656C3.06006 3.52734 3.82959 2.75781 4.78271 2.75781C5.73193 2.75781 6.50146 3.52734 6.50146 4.47656C6.50146 5.42188 5.73193 6.19531 4.78271 6.19531ZM17.3765 17.043H14.4116V12.4023C14.4116 11.2969 14.3921 9.87109 12.8687 9.87109C11.3257 9.87109 11.0913 11.0781 11.0913 12.3242V17.043H8.13037V7.49609H10.9741V8.80078H11.0132C11.4077 8.05078 12.3765 7.25781 13.8179 7.25781C16.8218 7.25781 17.3765 9.23438 17.3765 11.8047V17.043Z'
                    fill='white'
                  />
                </svg>
              </div>
            </Link>
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
