import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-24'>
            <section className='flex justify-evenly flex-wrap footer-section-1'>
                <div className='w-48'>
                    <p className='greatVictorian font-bold text-lg'>Indian <span className='text-red-700 greatVictorian font-bold'> Pallete </span></p>
                    <p>Lorem ipsum dolor sit am consectetur adipisicing elit.</p>
                    <div className='flex justify-between mt-3'>
                        <img src="../../../assests/facebook-f.svg" alt="facebook" className='w-3'/>
                        <img src="../../../assests/x-twitter.svg" alt="twitter" className='w-4'/>
                        <img src="../../../assests/square-instagram.svg" alt="instagram" className='w-4'/>
                        <img src="../../../assests/linkedin-in.svg" alt="linkedin" className='w-5'/>
                         <img src="../../../assests/youtube.svg" alt="linkedin" className='w-5'/>
                    </div>
                </div>
                <div>
                    <p className='text-red-700 font-bold mb-5'>Services</p>
                    <div className='link-wrapper'>
                        <a href='#service' >Features</a>
                        <a href='#service' >Pricing</a>
                        <a href='#service' >Projects</a>
                        <a href='#service' >Reviews</a>
                        <a href='#service' >Updates</a>
                    </div>
                </div>
                <div>
                    <p className='text-red-700 font-bold mb-5'>Company</p>
                    <div className='link-wrapper'>
                        <a href='#company'>About</a>
                        <a href='#company'>Contact us</a>
                        <a href='#company'>Careers</a>
                        <a href='#company'>Culture</a>
                        <a href='#company'>Blog</a>
                    </div>
                </div>
                <div>
                    <p className='text-red-700 font-bold mb-5'>Support</p>
                    <div className='link-wrapper'>
                        <a href='#support'>Getting started</a>
                        <a href='#support'>Help Center</a>
                        <a href='#support'>Server status</a>
                        <a href='#support'>Report a bug</a>
                        <a href='#support'>Chat support</a>
                    </div>
                </div>
                <div className='w-48'>
                    <p className='text-red-700 font-bold mb-5'>Contact us</p>
                    <div className='link-wrapper'>
                        <a href='mailto:indianpalleteinfo@gmail.com'>indianpalleteinfo@gamil.com</a>
                        <a href='tel : 412 - 854 - 6525'>412 - 854 - 6525</a>
                        <p>shaitan galli khatra mahal andher nagari shamsan ke samne</p>
                    </div>
                </div>

            </section>
            <hr className='my-3'/>
            <section className='flex justify-around'>
                <p>Copyright @ 2023 ED</p>
                <p>All Rights Reserved | <a href='#T&C'>Term & Conditions</a> | <a href='#P&P'>Private Policy</a></p>
            </section>
        </footer>
    )
}

export default Footer;