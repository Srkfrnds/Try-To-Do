import news1 from '../assets/images/blog/blog-01.jpg';
import news2 from '../assets/images/blog/blog-02.jpg';
import news3 from '../assets/images/blog/blog-03.jpg';
import company1 from '../assets/images/brand/brand-01.png';
import company2 from '../assets/images/brand/brand-02.png';
import company3 from '../assets/images/brand/brand-03.png';
import company4 from '../assets/images/brand/brand-04.png';
import company5 from '../assets/images/brand/brand-05.png';
import company6 from '../assets/images/brand/brand-06.png';

const LatestNews = () => {
  return (
    <div className='pt-20 pb-20 max-w-[1260px] mx-auto'>
      <div className='section-title our-work pb-20 flex items-end max-md:flex-col max-md:items-center'>
        <div>
          <h2 className='title max-md:text-center'>Latest News</h2>
          <p className='max-w-[60%] max-md:text-center'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className='service-btn'>
          <a className='btn-transparent rn-btn-dark' href='/service'>
            <span className='text'>View All News</span>
          </a>
        </div>
      </div>
      <div className='our-img-card flex justify-center items-center gap-10'>
        <div className='our-card rounded-2xl overflow-hidden remove-hover cursor-pointer'>
          <div className='card-img '>
            <img src={news1} alt='our-work' />
            <div className='overlay'></div>
          </div>
          <div className='content our-card-content'>
            <p>Business Strategy</p>
            <h3 className='title'> Getting tickets to the big show</h3>
            <div className='portfolio-button'>
              <a className='rn-btn' href='#'>
                Case Study
              </a>
            </div>
          </div>
        </div>
        <div className='our-card rounded-2xl overflow-hidden remove-hover cursor-pointer'>
          <div className='card-img'>
            <img src={news2} alt='our-work' />
            <div className='overlay'></div>
          </div>
          <div className='content our-card-content'>
            <p>Business Strategy</p>
            <h3 className='title'> Getting tickets to the big show</h3>
            <div className='portfolio-button'>
              <a className='rn-btn' href='#'>
                Case Study
              </a>
            </div>
          </div>
        </div>
        <div className='our-card rounded-2xl overflow-hidden remove-hover cursor-pointer'>
          <div className='card-img'>
            <img src={news3} alt='our-work' />
            <div className='overlay'></div>
          </div>
          <div className='content our-card-content'>
            <p>Business Strategy</p>
            <h3 className='title'> Getting tickets to the big show</h3>
            <div className='portfolio-button'>
              <a className='rn-btn' href='#'>
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='company pt-20 pb-20 max-md:pb-0'>
        <div className='flex flex-wrap gap-y-12 max-md:justify-around max-md:gap-10'>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company1} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company2} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company3} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company4} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company5} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company6} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company4} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company5} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company6} alt='company' />
          </div>
          <div className='brand text-center p-5 basis-[20%]'>
            <img src={company1} alt='company' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
