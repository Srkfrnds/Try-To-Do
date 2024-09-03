/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from 'react-router-dom';
import ErrorPageImg from '../assets/images/illustration.svg';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='pb-20 pt-10 bg-cover bg-center bg-no-repeat bg_image bg_image--18 bg_image '>
        <div className='container mx-auto'>
          <div className='flex justify-center'>
            <div className='text-center pt-24'>
              <h2 className='title theme-gradient text-[72px] font-bold'>
                404 Page
              </h2>
              <p className='text-white'>
                Home / <span className='text-[#f9004d]'>About</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className=''>
        <div className='container min-h-screen px-6 py-12 mx-auto lg:flex items-center lg:gap-12'>
          <div className=' lg:w-1/2'>
            <p className='text-sm font-medium text-blue-500'>404 error</p>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
              Page not found
            </h1>
            <p className='mt-4 text-gray-500 '>
              Sorry, the page you are looking for doesn't exist. Here are some
              helpful links:
            </p>

            <div className='flex items-center mt-6 gap-x-3'>
              <button
                onClick={() => navigate(-1)}
                className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>
                <span>Go back</span>
              </button>

              <Link
                to='/'
                className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 '
              >
                Take me home
              </Link>
            </div>
          </div>

          <div className='relative w-full mt-12 lg:w-1/2 lg:mt-0'>
            <img
              className='w-full max-w-lg lg:mx-auto'
              src={ErrorPageImg}
              alt='Page not found illustration'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
