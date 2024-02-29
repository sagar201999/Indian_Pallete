import React from 'react'

const Guide = () => {
    return (
        <>
            <main className='flex justify-evenly items-center flex-wrap-reverse mt-20'>
                <section className='guide-section-1'>
                    <h1>Our Chef will Guide you through indian cuisine</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Harum alias ab autem eligendi atque quam fuga ut similique quo quia enim provident ullam iusto repellat.
                    </p>
                    <div className='mt-4'>
                        <button className='bg-red-700 text-white rounded-full px-4 py-2'>Book a Table</button>
                        <button className='bg-white rounded-full px-4 py-2 mx-7 v-m'>View a Menu</button>
                    </div>
                </section>
                <section className='guide-section-2'>
                    <img src='../../../assests/chef-1.png' alt='chef' className='chef' />
                </section>

            </main>
        </>
    )
}

export default Guide;