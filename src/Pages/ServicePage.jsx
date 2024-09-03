import Card from "../sections/Card";


const ServicePage = () => {
  return (
    <>
      <div className='pt-32 pb-48 bg-cover bg-center bg-no-repeat bg_image bg_image--18 bg_image '>
        <div className='container mx-auto'>
          <div className='flex justify-center'>
            <div className='text-center pt-24'>
              <h2 className='title theme-gradient text-[72px] font-bold'>
                Service
              </h2>
              <p className='text-white'>
                Home / <span className='text-[#f9004d]'>Service</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card Heading='Our Services' bg='bg-[#F8F9FC]' />
      <Card Heading='Strategy' />
      <Card Heading='Creative Agency' bg='bg-[#F8F9FC]' cardBg='bg-[#f6f6f6]' />

      <Card Heading='Development' cardBg='bg-[#f6f6f6]' />
    </>
  );
};

export default ServicePage;
