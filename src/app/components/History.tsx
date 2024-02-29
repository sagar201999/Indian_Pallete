import React from 'react'

const History = () => {
    return (
        <>
            <main>
                <section className='history-section-1 text-center w-2/4 my-12 mx-auto'>
                    <h1>History of our dishes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, incidunt totam? Dolor nulla accusamu
                        s qui incidunt esse perspiciatis maxime, amet perferendis delenit
                    </p>
                </section>

                <section className='history-section-2'>
                    <div className='flex justify-around items-center flex-wrap my-10 h-d-wrapper' >
                        <img src='../../../assests/palak-paneer.png' alt='palak paneer' className='w-80' />
                        <div className='history-info'>
                            <h1>2011</h1>
                            <h1>Palak Paneer</h1>
                            <p>Palak Paneer is a popular North Indian dish that has its roots in Punjabi cuisine. The history of Palak Paneer is not precisely documented, but it is believed to have originated in Northern India, where paneer and spinach are common ingredients.</p>
                            <button className='bg-red-700 text-white rounded-full px-4 py-2 mt-5'>View Menu</button>
                        </div>
                    </div>

                    <div className='flex justify-around items-center flex-wrap flex-row-reverse my-24 h-d-wrapper' >
                        <img src='../../../assests/TANDOORI-CHICKEN.png' alt='palak paneer' className='w-80' />
                        <div className='history-info'>
                            <h1>2011</h1>
                            <h1>Tandoori Chicken</h1>
                            <p>Tandoori chicken is a traditional Indian dish with roots that trace back to the ancient culinary traditions of the Indian subcontinent. The word "tandoor" refers to a cylindrical clay oven used in traditional Indian cooking, and it plays a crucial role in the preparation of this iconic dish.</p>
                            <button className='bg-red-700 text-white rounded-full px-4 py-2 mt-5'>View Menu</button>
                        </div>
                    </div>

                    <div className='flex justify-around items-center flex-wrap h-d-wrapper' >
                        <img src='../../../assests/bengali_fish_fry.png' alt='palak paneer' className='w-80' />
                        <div className='history-info'>
                            <h1>2011</h1>
                            <h1>Bengali Fish Fry</h1>
                            <p>Bengali Fish Fry is a delectable dish that reflects the rich culinary heritage of Bengal, a region known for its love for fish and intricate flavors. Fish holds a special place in Bengali cuisine, and the Bengali Fish Fry is a testament to the artistry of Bengali cooking.</p>
                            <button className='bg-red-700 text-white rounded-full px-4 py-2 mt-5'>View Menu</button>
                        </div>
                    </div>
                </section>
            </main>



        </>
    )
}

export default History;