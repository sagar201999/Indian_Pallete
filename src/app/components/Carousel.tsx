import React from 'react';

const Carousel = () => {
    return (
        <>

            <div className='flex justify-around'>
                <div className='specialities-wrapper'>
                    <img src='../../../assests/panjabi_thali.png' alt=' ' className='thali' />
                    <div className='text-center'>
                        <p className='greatVictorianStandard text-3xl font-bold'>Panjabi Thali</p>
                        <p>Savor the Symphony of Punjabi Flavors - A Taste of Tradition!</p>
                        <p className='font-bold text-3xl greatVictorianStandard mt-3'>₹ 300.00</p>
                    </div>
                </div>
                <div className='specialities-wrapper'>
                    <img src='../../../assests/marathi_thali_2.png' alt=' ' className='thali' />
                    <div  className='text-center'>
                        <p className='greatVictorianStandard text-3xl font-bold'>Maharashtrian Thali</p>
                        <p>Maharashtrian Magic on a Plate - Where Spice Meets Splendor!</p>
                        <p className='font-bold text-3xl greatVictorianStandard mt-3'>₹ 499.00</p>
                    </div>
                </div>
                <div className='specialities-wrapper'>
                    <img src='../../../assests/marathi_thali.png' alt=' ' className='thali' />
                    <div  className='text-center'>
                        <p className='greatVictorianStandard text-3xl font-bold'>Rajastani Thali</p>
                        <p>Royal Rajasthani Feast - Spice, Heritage, and Royalty on Every Platter!</p>
                        <p className='font-bold text-3xl greatVictorianStandard mt-3'>₹ 500.00</p>
                    </div>
                </div>
                <div className='specialities-wrapper'>
                    <img src='../../../assests/spicy_chicken_biryani.png' alt=' ' className='thali' />
                    <div  className='text-center'>
                        <p className='greatVictorianStandard text-3xl font-bold'>Spicy Chicken Biryani</p>
                        <p>Ignite Your Taste Buds - Spicy Chicken Biryani, Where Spice Meets Elegance!</p>
                        <p className='font-bold text-3xl greatVictorianStandard mt-3'>₹ 500.00</p>
                    </div>
                </div>



            </div>



        </>
    )
}

export default Carousel;