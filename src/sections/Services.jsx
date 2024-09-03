import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='service-area pt-20 pb-20 bg-[#F8F7FD] max-md:py-0'>
      <div className='container mx-auto'>
        <div className='flex justify-center max-w-[1260px] mx-auto gap-10 max-md:flex-col'>
          <div className='lg:w-1/3 w-full'>
            <div className='section-title mt-8 md:mt-1 mb-2'>
              <h2 className='title max-md:text-center'>Services</h2>
              <p className='max-md:text-center'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <div className='service-btn max-md:text-center'>
                <a className='btn-transparent rn-btn-dark ' href='/service'>
                  <span className='text '>Request Custom Service</span>
                </a>
              </div>
            </div>
          </div>
          <div className='lg:w-2/3 w-full'>
            <div className='flex flex-wrap'>
              <div className='lg:w-1/2 w-full p-4'>
                <Link to='/service-details'>
                  <div className='service service__style--2 p-4  rounded-lg '>
                    <div className='icon mb-4'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'></path>
                        <line x1='2' y1='20' x2='2' y2='20'></line>
                      </svg>
                    </div>
                    <div className='content'>
                      <h3 className='title'>Business Strategy</h3>
                      <p>
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='lg:w-1/2 w-full p-4'>
                <Link to='/service-details'>
                  <div className='service service__style--2 p-4  rounded-lg '>
                    <div className='icon mb-4'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
                        <polyline points='2 17 12 22 22 17'></polyline>
                        <polyline points='2 12 12 17 22 12'></polyline>
                      </svg>
                    </div>
                    <div className='content'>
                      <h3 className='title'>Website Development</h3>
                      <p>
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='lg:w-1/2 w-full p-4'>
                <Link to='/service-details'>
                  <div className='service service__style--2 p-4  rounded-lg '>
                    <div className='icon mb-4'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                        <circle cx='9' cy='7' r='4'></circle>
                        <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                        <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                      </svg>
                    </div>
                    <div className='content'>
                      <h3 className='title'>Marketing & Reporting</h3>
                      <p>
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='lg:w-1/2 w-full p-4'>
                <Link to='/service-details'>
                  <div className='service service__style--2 p-4  rounded-lg '>
                    <div className='icon mb-4'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='2'
                          y='3'
                          width='20'
                          height='14'
                          rx='2'
                          ry='2'
                        ></rect>
                        <line x1='8' y1='21' x2='16' y2='21'></line>
                        <line x1='12' y1='17' x2='12' y2='21'></line>
                      </svg>
                    </div>
                    <div className='content'>
                      <h3 className='title'>Mobile App Development</h3>
                      <p>
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
