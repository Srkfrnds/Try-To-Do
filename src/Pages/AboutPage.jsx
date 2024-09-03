import { useEffect, useRef, useState } from "react";
import AboutUs from "../sections/AboutUs";
import CountUp from 'react-countup';
import company1 from '../assets/images/brand/brand-01.png';
import company2 from '../assets/images/brand/brand-02.png';
import company3 from '../assets/images/brand/brand-03.png';
import company4 from '../assets/images/brand/brand-04.png';
import company5 from '../assets/images/brand/brand-05.png';
import company6 from '../assets/images/brand/brand-06.png';
import findingUs from '../assets/images/bg/finding-us-01.png'
import team1 from '../assets/images/Team/team-01.jpg';
import team2 from '../assets/images/Team/team-02.jpg';
import team3 from '../assets/images/Team/team-03.jpg';


const AboutPage = () => {

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const countUpRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewPortEntered(true);
        } else {
          setViewPortEntered(false);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  const aboutCount = [
    {
      count: 120,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
    {
      count: 30,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
    {
      count: 150,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
    {
      count: 20,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
  ];





  return (
    <div>
      <div className='pt-32 pb-48 bg-cover bg-center bg-no-repeat bg_image bg_image--18 bg_image '>
        <div className='container mx-auto'>
          <div className='flex justify-center'>
            <div className='text-center pt-24'>
              <h2 className='title theme-gradient text-[72px] font-bold'>
                About
              </h2>
              <p className='text-white'>
                Home / <span className='text-[#f9004d]'>About</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
      <div className='py-8 max-w-[1260px] mx-auto'>
        <h3 className='text-4xl leading-6 text-[#1f1f25] font-medium  text-center pb-10 max-md:pb-5 max-md:text-3xl'>
          Our Fun Facts
        </h3>
        <div
          className='about-count flex items-center justify-between my-[30px] max-md:justify-start max-md:flex-wrap max-md:gap-20'
          ref={countUpRef}
        >
          {aboutCount.map((count, index) => (
            <div key={index} className='w-[20%] max-md:w-1/2 max-sm:w-full text-center text-index'>
              <h1 className='heading-1'>
                <CountUp
                  end={viewPortEntered ? count.count : 0}
                  start={0}
                  suffix={count.plus ? '+' : '+'}
                  duration={5}
                  redraw={true}
                >
                  {({ countUpRef, start }) => {
                    if (viewPortEntered) {
                      start();
                    }
                    return <span ref={countUpRef} />;
                  }}
                </CountUp>
              </h1>
              <h4>{count.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className='py-20 rn-finding-us-area rn-finding-us bg_color--1'>
        <div className='inner'>
          <div className='content-wrapper'>
            <div className='content'>
              <h4 className='theme-gradient'>Find Your Work Now</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that.
              </p>
              <a className='rn-btn btn-white' href='/about'>
                Get Started
              </a>
            </div>
          </div>
          <div className='thumbnail'>
            <div className='image'>
              <img src={findingUs} alt='Finding Images' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-16'>
        <div className='section-title service-style--3 text-center mb-16 '>
          <h2 className='title'>Skilled Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
            {/* Team Member 1 */}
            <div className='flex flex-col items-center team'>
              <div className='mb-4 thumbnail flex justify-center items-center'>
                <img
                  className='w-4/5 rounded-3xl'
                  src={team1}
                  alt='Team Member'
                />
              </div>
              <div className='text-center content'>
                <h4 className='font-medium title text-xl'>Jone Due</h4>
                <p className='text-md font-medium text-gray-600 designation'>
                  Sr. Web Developer
                </p>
              </div>
              <div className='mt-4 flex justify-center space-x-4 social-icon'>
                <a
                  href='https://www.facebook.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 320 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Facebook SVG */}
                  </svg>
                </a>
                <a
                  href='http://linkedin.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 448 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* LinkedIn SVG */}
                  </svg>
                </a>
                <a
                  href='https://twitter.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Twitter SVG */}
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className='flex flex-col items-center team'>
              <div className='mb-4 thumbnail flex justify-center items-center'>
                <img
                  className='w-4/5 rounded-3xl'
                  src={team2}
                  alt='Team Member'
                />
              </div>
              <div className='text-center content'>
                <h4 className='font-medium title text-xl'>Jone Due</h4>
                <p className='text-md font-medium text-gray-600 designation'>
                  Sr. Web Developer
                </p>
              </div>
              <div className='mt-4 flex justify-center space-x-4 social-icon'>
                <a
                  href='https://www.facebook.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 320 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Facebook SVG */}
                  </svg>
                </a>
                <a
                  href='http://linkedin.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 448 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* LinkedIn SVG */}
                  </svg>
                </a>
                <a
                  href='https://twitter.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Twitter SVG */}
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className='flex flex-col items-center team'>
              <div className='mb-4 thumbnail flex justify-center items-center'>
                <img
                  className='w-4/5 rounded-3xl'
                  src={team3}
                  alt='Team Member'
                />
              </div>
              <div className='text-center content'>
                <h4 className='font-medium title text-xl'>Jone Due</h4>
                <p className='text-md font-medium text-gray-600 designation'>
                  Sr. Web Developer
                </p>
              </div>
              <div className='mt-4 flex justify-center space-x-4 social-icon'>
                <a
                  href='https://www.facebook.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 320 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Facebook SVG */}
                  </svg>
                </a>
                <a
                  href='http://linkedin.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 448 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* LinkedIn SVG */}
                  </svg>
                </a>
                <a
                  href='https://twitter.com/'
                  className='text-gray-600 hover:text-blue-600'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Twitter SVG */}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='company pt-10 pb-20'>
        <div className='flex flex-wrap justify-center items-center gap-y-12 max-md:gap-12'>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company1} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company2} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company3} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company4} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company5} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company6} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company4} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company5} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company6} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company1} alt='company' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
