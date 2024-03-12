import Navbar from '../components/Navbar'
import { menuItems } from '../apis/MenuItems';


const Menu = () => {


  return (
    <>
      <Navbar />

      <main>
        <div>
          <h1 className='greatVictorian text-center text-5xl my-5'>Our Menu</h1>
        </div>
        <section className='flex justify-evenly flex-wrap items-center mt-10'>
          {menuItems.map((items) => (
            <div key={items.id} className="card m-2">
              <div key={items.id} className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={items.image} alt="allo_gobi" className='w-50' />
                    <div className='text-center'>
                      <strong className='greatVictorian text-2xl'>{items.name}</strong>
                      <p className='greatVictorian text-2xl font-bold'>₹ {items.price}</p>
                    </div>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <h4 className="badge">{items.name}</h4>
                    <div>
                      <ul>
                        <li className='text-sm'>{items.info1}</li>
                        <li className='text-sm'>{items.info2}</li>
                        <li className='text-sm'>{items.info3}</li>
                        <li className='text-sm'>{items.info4}</li>
                      </ul>
                      <button className='px-3 py-1 rounded-2xl mt-5  bg-red-700 '>Add to Table</button>
                    </div>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>{items.name}</strong>
                        </p>
                        <p>₹ {items.price}</p>
                      </div>
                      <p className="card-footer">
                        {items.time} &nbsp; | &nbsp; {items.serving}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </section>




      </main>
    </>

  )



}


export default Menu;