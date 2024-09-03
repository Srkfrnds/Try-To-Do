import icon1 from '../assets/images/icons/icon-01.png';
import icon2 from '../assets/images/icons/icon-02.png';
import icon3 from '../assets/images/icons/icon-03.png';
const Home = () => {
  return (
    <>
      <div className='home-bg'>
        <div className='home-main absolute max-w-[50%] left-36 top-[25%]'>
          <h1 className='home-heading title theme-gradient'>
            A DIGITAL AGENCY.
          </h1>
        </div>
        <div className='home-card flex justify-around items-center absolute top-[63%] left-36'>
          <div className='service service__style--1'>
            <div className='icon'>
              <img src={icon1} alt='Digital Agency' />
            </div>
            <div className='content'>
              <h4 className='title'>Business Stratagy</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
          </div>
          <div className='service service__style--1'>
            <div className='icon'>
              <img src={icon2} alt='Digital Agency' />
            </div>
            <div className='content'>
              <h4 className='title'>Website Development</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
          </div>
          <div className='service service__style--1'>
            <div className='icon'>
              <img src={icon3} alt='Digital Agency' />
            </div>
            <div className='content'>
              <h4 className='title'>Marketing &amp; Reporting</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
