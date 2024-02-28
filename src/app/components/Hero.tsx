import React from 'react'
const Hero = () => {
    return (
        <>
            <main >
                <section className='flex justify-evenly mt-14 items-center flex-wrap h-full'>
                    <div className='text-container'>
                        <h1>Journey Through Indian Flavors</h1>
                        <p>Embark on a culinary journey that transcends borders and tantalizes your taste buds. At our restaurant, we curate an
                            experience where every dish is a masterpiece, a celebration of authentic flavors that transport you to the heart
                            of India.
                        </p>
                        <div className='mt-4'>
                            <button className='bg-red-700 text-white rounded-full px-4 py-2'>Book a Table</button>
                            <button className='bg-white rounded-full px-4 py-2 mx-7 v-m'>View a Menu</button>
                        </div>
                    </div>
                    <img src='../../../assests/Biryani-1.png' alt='biryani' className='hero-image' />
                </section>

                <section className='hero-section-2'>
                    <img src='../../../assests/chilli.png' alt='chilli' className='w-24 m-auto' />
                    <h1>Our Specialities</h1>
                    <p>At our restaurant, we curate an
                        experience where every dish is a masterpiece, a celebration of authentic flavor.</p>

                </section>

            </main>


        </>
    )
}

export default Hero;