import React from 'react';
import bannerImg from "/images/home/banner.png";

const Banner = () => {
  return (

    <div className='section-container bg-gradient-to-r from-[#0D0300] from-0% to-[#0D0300] to-100%'> {/*background color*/}
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            
            {/*images*/}
            <div className='md:w-1/2'>
                <img src={bannerImg} alt=""/>

                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                    <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img src="/images/home/b-food1.png" alt ="" className = 'rounded-2xl'/>
                        <div className = "space-y-1">
                            <h5 className='font-medium mb-1'>Chocolate milkshake</h5>
                            <div className="rating rating-sm">
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400" 
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400" 
                                checked 
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400" 
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                readOnly 
                              />
                            </div>
                            <p className= "text-red">Rs.3000.00</p>
                        </div>
                    </div>
                    <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img src="/images/home/b-food2.png" alt ="" className = 'rounded-2xl'/>
                        <div className = "space-y-1">
                            <h5 className='font-medium mb-1'>Strawberry milkshake</h5>
                            <div className="rating rating-sm">
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400" 
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400" 
                                checked 
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400" 
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                readOnly
                              />
                              <input
                               type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                readOnly 
                              />
                            </div>
                            <p className= "text-red">Rs.5000.00</p>
                        </div>
                    </div>
                </div>
            </div> 
            
            {/*text*/}
            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Explore the City With Our Top Quality
                    <span className='text-pink'> Bikes</span>
                </h2>
                <p className='text-xl text-[#4a4a4a]'>Affordable bike rentals in Sri Lanka. Secure your ride today with our transparent pricing.</p>
                <button className='btn bg-pink px-8 py-3 font-semibold text-white rounded-full'>Booking  Now</button>
            </div> 

            
        </div>
    </div>
  );
};

export default Banner;