import Slider from 'react-slick';
import ourWork1 from '../assets/images/portfolio/portfolio-1.jpg';
import ourWork2 from '../assets/images/portfolio/portfolio-2.jpg';
import ourWork3 from '../assets/images/portfolio/portfolio-3.jpg';
import ourWork4 from '../assets/images/portfolio/portfolio-4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from 'react';


const OurWork = () => {

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
    title: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
  },
  {
    count: 20,
    title: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
  },
];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='pt-20 pb-20'>
      <div className='section-title our-work max-w-[1260px] mx-auto mb-10'>
        <h2 className='title max-md:text-center'>Our Works</h2>
        <p className='max-w-[45%]'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <Slider {...settings}>
        {[ourWork1, ourWork2, ourWork3, ourWork4].map((image, index) => (
          <div key={index} className='our-card px-4'>
            <div className='card-img'>
              <img src={image} alt={`our-work-${index + 1}`} />
            </div>
            <div className='content our-card-content'>
              <p>Business Strategy</p>
              <h3 className='title'>Getting tickets to the big show</h3>
              <div className='portfolio-button'>
                <a className='rn-btn' href='#'>
                  Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='py-8 max-w-[1260px] mx-auto'>
        <h3 className='text-4xl leading-6 text-[#1f1f25] font-medium  text-center pb-10 max-md:pb-5 max-md:text-3xl pt-20'>
          Our Fun Facts
        </h3>
        <div
          className='about-count flex items-center justify-between my-[30px] max-md:justify-center max-md:flex-wrap max-md:gap-20'
          ref={countUpRef}
        >
          {aboutCount.map((count, index) => (
            <div
              key={index}
              className='w-[20%] max-md:w-1/2 max-sm:w-full text-center text-index'
            >
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
    </div>
  );
};

export default OurWork;
