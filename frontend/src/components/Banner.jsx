import React from 'react';
import bannerImg from "/images/home/banner.png";

const Banner = () => {
  return (

    <div className='section-container bg-pink'> 
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            
            {/*images*/}
            <div className='md:w-1/2'>
                <img src={bannerImg} alt=""/>

                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                
                   
                </div>
            </div> 
            
            {/*text*/}
            <div className='md:w-1/2 space-y-7 px-4 py-24'>
                <h2 className='md:text-5xl text-4xl text-white font-bold md:leading-snug leading-snug'>Explore the City With Our Top Quality
                    <span className='text-orange'> Bikes</span>
                </h2>

                <p className='text-xl text-white'>Affordable bike rentals in Sri Lanka. Secure your ride today with our transparent pricing.</p>
                <button className='btn bg-orange px-8 py-3 font-semibold text-white rounded-full'>Booking  Now</button>
            </div> 

            
        </div>
    </div>
  );
};

export default Banner;