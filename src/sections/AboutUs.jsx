/* eslint-disable react/no-unescaped-entities */
import aboutImage from '../assets/images/about/about-1.jpg';
      
const AboutUs = () => {
  return (
    <div className='flex flex-wrap items-center about justify-center max-w-[1260px] mx-auto gap-20 pt-32 pb-20'>
      <div className='w-[40%] max-md:w-1/2 max-sm:w-full'>
        <div className='thumbnail'>
          <img
            className='w-[80%] max-h-[500px] max-md:w-[70%] max-md:max-w-[70%] mx-auto'
            src={aboutImage}
            alt='About Images'
          />
        </div>
      </div>
      <div className='w-1/2   max-md:w-[80%] max-sm:w-full'>
        <div className='about-inner inner'>
          <div className='section-title'>
            <h2 className='title max-md:text-center'>About</h2>
            <p className='description max-md:text-center max-md:px-[5%]'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
          </div>
          <div className='flex flex-wrap mt-8 sm:mt-2'>
            <div className='lg:w-6/12 w-full'>
              <div className='about-us-list'>
                <h3 className='title max-md:text-center'>Who we are</h3>
                <p className='max-md:text-center max-md:px-[5%]'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 w-full'>
              <div className='about-us-list'>
                <h3 className='title max-md:text-center'>Who we are</h3>
                <p className='max-md:text-center max-md:px-[5%]'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
