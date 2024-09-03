
const ContactSection = () => {
  return (
    <>
      <div className='pt-32 pb-48 bg-cover bg-center bg-no-repeat bg_image bg_image--18 bg_image '>
        <div className='container mx-auto'>
          <div className='flex justify-center'>
            <div className='text-center pt-24'>
              <h2 className='title theme-gradient text-[72px] font-bold'>
                Contact Us
              </h2>
              <p className='text-white'>
                Home / <span className='text-[#f9004d]'>Contact</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-[#F8F9FC] py-20 max-md:py-10'>
        <div className='container px-6 py-12 mx-auto max-w-[1260px]'>
          <div className='max-md:text-center'>
            <p className='font-medium text-gray-600'>Contact us</p>
            <h1 className='mt-2 text-2xl font-semibold text-black md:text-3xl'>
              Get in touch
            </h1>
            <p className='mt-3 text-gray-600'>
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className='grid grid-cols-1 contact-info gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            <div>
              <span className='inline-block p-3 text-[#F9004D] rounded-full bg-blue-100/80'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
              </span>
              <h2 className='mt-4 text-lg font-medium text-black'>Email</h2>
              <p className='mt-2 text-gray-600'>
                Our friendly team is here to help.
              </p>
              <p className='mt-2 text-[#000000]'>hello@merakiui.com</p>
            </div>

            <div>
              <span className='inline-block p-3 text-[#F9004D] rounded-full bg-blue-100/80'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                  />
                </svg>
              </span>
              <h2 className='mt-4 text-lg font-medium text-black '>Office</h2>
              <p className='mt-2 text-gray-600'>
                Come say hello at our office HQ.
              </p>
              <p className='mt-2 text-[#000000] font-normal'>
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className='inline-block p-3 text-[#F9004D] rounded-full bg-blue-100/80'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
              </span>
              <h2 className='mt-4 text-lg font-medium text-black'>Phone</h2>
              <p className='mt-2 text-gray-600'>Mon-Fri from 8am to 5pm.</p>
              <p className='mt-2 text-[#000000]'>+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </section>

      <section className=' bg-white pb-40 max-md:pb-10 '>
        <div className='container px-6 py-12  mx-auto max-w-[1260px]'>
          <div className='lg:flex lg:items-center lg:-mx-10 gap-20'>
            <div className='lg:w-1/2 lg:mx-10'>
              <h1 className='text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl max-md:text-center'>
                Let’s talk
              </h1>

              <p className='mt-4 text-gray-500 max-md:text-center '>
                Ask us everything and we would love to hear from you
              </p>

              <form className='mt-12'>
                <div className='-mx-2 md:items-center md:flex'>
                  <div className='flex-1 px-2'>
                    <label className='block mb-2 text-sm text-gray-600 '>
                      Full Name
                    </label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>

                  <div className='flex-1 px-2 mt-4 md:mt-0'>
                    <label className='block mb-2 text-sm text-gray-600'>
                      Email address
                    </label>
                    <input
                      type='email'
                      placeholder='johndoe@example.com'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                </div>

                <div className='w-full mt-4'>
                  <label className='block mb-2 text-sm text-gray-600'>
                    Message
                  </label>
                  <textarea
                    className='block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    placeholder='Message'
                  ></textarea>
                </div>

                <button className='w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                  get in touch
                </button>
              </form>
            </div>

            <div className='w-1/2 max-md:hidden'>
              <img
                className='object-cover mx-auto contact-height md:h-full w-full'
                src='https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
