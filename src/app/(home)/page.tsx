import Button from '@/components/atoms/button';
import { CardDevice } from '@/components/molecules/CardDevice';
import FAQCard from '@/components/molecules/FAQCard';
import PlanCard from '@/components/molecules/PlanCard';
import Footer from '@/components/organism/Footer';
import Navbar from '@/components/organism/Navbar';
import SliderCategory from '@/components/organism/SliderCategory';
import { ListDevices } from '@/services/devices';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-black-08'>
      <Navbar />
      <section className='bg-background bg-cover bg-center h-screen w-full'>
        <div className='bg-gradient-to-t from-black-08 via-transparent to-black-08 h-full w-full'>
          <div className='relative bg-black-08 bg-opacity-70 flex flex-col justify-end h-full w-full px-6 py-10'>
            <Image
              src='/images/logo.png'
              width={200}
              height={200}
              alt='logo'
              className='absolute h-64 w-64 lg:w-80 lg:h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <div className='mx-auto text-center w-11/12'>
              <h1 className='text-white text-3xl lg:text-5xl font-bold'>The Best Streaming Experience</h1>
              <p className='mt-2.5 text-grey-60 text-sm w-full'>
                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
                anytime, anywhere.{' '}
                <span className='hidden md:block'>
                  With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic
                  movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find
                  the content you want to watch.
                </span>
              </p>
              <Button style='primary-button mt-7'>Start Watching Now</Button>
            </div>
          </div>
        </div>
      </section>
      <SliderCategory />
      <section className='px-4 mt-12 lg:px-20'>
        <div className=''>
          <h3 className='text-white font-bold text-xl lg:text-3xl'>
            We Provide you streaming experience across various devices.
          </h3>
          <p className='text-sm text-grey-60 mt-2 lg:text-base'>
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3'>
          {ListDevices.map((device, key) => (
            <CardDevice
              key={key}
              Subtitle={device.subtitle}
              description={device.description}
              sourceImage={device.sourceImage}
              widthImage={device.widthIcon}
              heightImage={device.heightIcon}
            />
          ))}
        </div>
      </section>
      <section className='px-4 mt-20 lg:px-20'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className=''>
            <h3 className='text-white font-bold text-xl'>Frequently Ask Questions</h3>
            <p className='text-sm text-grey-60 mt-2'>
              Got questions? We&apos;ve got answers! Check out our FAQ section to find answers to the most common
              questions about StreamVibe.
            </p>
          </div>
          <Button style='bg-red-45 w-fit text-white font-semibold text-sm rounded-md py-4 px-5 mt-5 md:mt-0'>
            Ask a Question
          </Button>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:mt-14'>
          <div className=''>
            <FAQCard
              listNumber='01'
              question='What is StreamVibe?'
              // answer='StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
            />
            <hr className='h-0.5 border-none w-full bg-gradient-to-r from-black via-red-50 to-black' />
            <FAQCard listNumber='02' question='How much does StreamVibe cost?' />
            <hr className='h-0.5 border-none w-full bg-gradient-to-r from-black via-red-50 to-black' />
            <FAQCard listNumber='03' question='What content is available on StreamVibe?' />
            <hr className='h-0.5 border-none w-full bg-gradient-to-r from-black via-red-50 to-black' />
            <FAQCard listNumber='04' question='How can I watch StreamVibe?' />
          </div>
          <div className=''>
            <FAQCard listNumber='05' question='How do I sign up for StreamVibe?' />
            <hr className='h-0.5 border-none w-full bg-gradient-to-r from-black via-red-50 to-black' />
            <FAQCard listNumber='06' question='What is the StreamVibe free trial?' />
            <hr className='h-0.5 border-none w-full bg-gradient-to-r from-black via-red-50 to-black' />
            <FAQCard listNumber='07' question='How do I contact StreamVibe customer support?' />
            <hr className='h-0.5 border-none w-full bg-gradient-to-r from-black via-red-50 to-black' />
            <FAQCard listNumber='08' question='What are the StreamVibe payment methods?' />
          </div>
        </div>
      </section>
      <section className='px-4 mt-20 lg:px-20'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className=''>
            <h3 className='text-white font-bold text-2xl'>Choose the plan that&apos;s right for you</h3>
            <p className='text-sm text-grey-60 mt-2.5'>
              Join StreamVibe and select from our flexible subscription options tailored to suit your viewing
              preferences. Get ready for non-stop entertainment!
            </p>
          </div>
          <div className='bg-black-06 mt-5 w-fit border border-black-15 p-2 rounded-lg'>
            <Button style='bg-black-12 text-white font-semibold text-sm rounded-md py-3 px-5'>Monthly</Button>
            <Button style='text-white font-semibold text-sm rounded-md py-3 px-5'>Yearly</Button>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 mt-10'>
          <PlanCard
            title='Basic'
            price={9.99}
            unit='month'
            description='Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.'
          />
          <PlanCard
            title='Standard'
            price={12.99}
            unit='month'
            description='Access to a wider selection of movies and shows, including most new releases and exclusive content'
          />
          <PlanCard
            title='Premium Plan'
            price={14.99}
            unit='month'
            description='Access to a widest selection of movies and shows, including all new releases and Offline Viewing'
          />
        </div>
      </section>
      <section className='px-4 my-20 lg:px-20'>
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
      <Footer />
    </main>
  );
}
