import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  // ข้อมูลไอดีเกมตัวอย่าง
  const [gameIds] = useState([
    {
      id: 1,
      title: 'ข้าวผัดกุ้ง',
      price: 50,
      image: 'https://i.pinimg.com/1200x/a6/03/a0/a603a035d3c16f8ff6a3ff2a973282f4.jpg',
      desc: 'จานเด็ดประจำร้าน',
      rating: 4.5
    },
    {
      id: 2,
      title: 'กระเพรา',
      price: 50,
      image: 'https://i.pinimg.com/1200x/e8/30/34/e83034e9c64884fe20f66428f318cc38.jpg',
      desc: 'หมู,ไก่,ทะเล',
      rating: 4.8
    },
    {
      id: 3,
      title: 'ผัดกระเทียม',
      price: 50,
      image: 'https://i.pinimg.com/736x/42/5a/af/425aaf98ac0d86d30d325616e6f97e6f.jpg',
      desc: 'หมู,ไก่',
      rating: 4.3
    },
    {
      id: 4,
      title: 'ผัดซีอิ๊ว',
      price: 50,
      image: 'https://i.pinimg.com/1200x/a2/4c/20/a24c20636f147d28e4d91ee40409b8c7.jpg',
      desc: 'เส้นใหญ่หมูสับ,หมูชิ้น,ไก่',
      rating: 4.6
    },
    {
      id: 5,
      title: 'ไข่เจียว',
      price: 40,
      image: 'https://i.pinimg.com/1200x/af/27/e6/af27e6a4929d7edd58a1e31c34570592.jpg',
      desc: 'หมูสับ,หมูชิ้น',
      rating: 4.4
    },
    {
      id: 6,
      title: 'ผัดกระเพราทะเล',
      price: 60,
      image: 'https://i.pinimg.com/1200x/01/0b/b2/010bb25a13298397c87501d870cb8d90.jpg',
      desc: 'โคตรทะเล',
      rating: 4.9
    },
    {
      id: 7,
      title: 'กระเพราหมูกรอบ',
      price: 60,
      image: 'https://i.pinimg.com/736x/b8/4b/4f/b84b4f84ff43392a358350f6dec91290.jpg',
      desc: 'หมูกรอบรสเด็ด',
      rating: 4.8
    },
    {
      id: 8,
      title: 'ข้าวหมกไก่',
      price: 50,
      image: 'https://i.pinimg.com/1200x/3d/f7/81/3df78151b37f3a4f958a14a46f0aa357.jpg',
      desc: 'หมกไก่รสเด็ด',
      rating: 4.3
    },
    {
      id: 9,
      title: 'ยำ',
      price: 50,
      image: 'https://i.pinimg.com/1200x/e3/00/e6/e300e62f3fcbe56e56b95c8438c7ed6a.jpg',
      desc: 'โคตรยำ',
      rating: 4.6
    },
    {
      id: 10,
      title: 'ขนมจีนน้ำยา',
      price: 40,
      image: 'https://i.pinimg.com/1200x/b0/11/b4/b011b475b3ceeacc9b31e31916b75a38.jpg',
      desc: 'มีทุกแกง',
      rating: 4.4
    },
    {
      id: 11,
      title: 'ผัดผักบุ้ง',
      price: 40,
      image: 'https://i.pinimg.com/736x/7d/f1/90/7df1909d1cebcbb7f2e4f27985174012.jpg',
      desc: 'มีราดข้าว,กับข้าว',
      rating: 4.9
    },
    {
      id: 12,
      title: 'ก๋วยเตี๋ยวเรือ',
      price: 35,
      image: 'https://i.pinimg.com/736x/13/db/de/13dbde5cb2e6bdb120fa561fd92594bf.jpg',
      desc: 'มีทุกน้ำทุกเส้น',
      rating: 4.5
    },
    {
      id: 13,
      title: 'ก๋วยเตี๋ยวต้มยำ',
      price: 40,
      image: 'https://i.pinimg.com/1200x/aa/6c/bf/aa6cbf0f8cb1b124a8a1709395af2ff3.jpg',
      desc: 'โคตรเตี๋ยวทะเล',
      rating: 4.2
    },
    {
      id: 14,
      title: 'บะหมี่กรอบ',
      price: 50,
      image: 'https://i.pinimg.com/1200x/13/de/33/13de3379ba6a6375e06be0ffbaeca93e.jpg',
      desc: 'ทีเด็ด',
      rating: 4.1
    },
    {
      id: 15,
      title: 'ข้าวซอยไก่',
      price: 109,
      image: 'https://i.pinimg.com/736x/d0/45/97/d04597f39f09960f5c4926b2501a012a.jpg',
      desc: 'อาหารเหนือมาถึงกลาง',
      rating: 4.3
    },
    {
      id: 16,
      title: 'แกงเขียวหวาน',
      price: 50,
      image: 'https://i.pinimg.com/736x/35/cd/6f/35cd6faca30cb3f204fadd923a0a4de8.jpg',
      desc: 'รสเด็ด',
      rating: 4.0
    },
    {
      id: 17,
      title: 'แกงข่าไก่',
      price: 50,
      image: 'https://i.pinimg.com/1200x/be/64/84/be648467a87eb3aff47b742a4f0dc5fd.jpg',
      desc: 'รสเด็ด',
      rating: 4.2
    },
    {
      id: 18,
      title: 'แกงส้มไข่ชะอม',
      price: 50,
      image: 'https://i.pinimg.com/736x/19/18/51/191851faa9a25e67dc480bc1c72e1840.jpg',
      desc: 'รสเด็ด',
      rating: 4.6
    },
    {
      id: 19,
      title: 'หมูกระทะ',
      price: 300,
      image: 'https://i.pinimg.com/1200x/6e/10/5e/6e105e9743884717fabb89099f54f10e.jpg',
      desc: '300,400,500',
      rating: 4.7
    },
    {
      id: 20,
      title: 'สุกี้ชาบู',
      price: 150,
      image: 'https://i.pinimg.com/1200x/4f/e1/51/4fe1519ced931560c5165ceca32487b5.jpg',
      desc: '150-300',
      rating: 4.1
    },
  ])

  return (
    <>
      <div className='min-h-screen flex flex-col bg-gray-50'>
        <Header />

        {/* Hero Section */}
        <section className='bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-4xl font-bold mb-4'>Tar Shop</h2>
            <p className='text-xl mb-2'>อาหารตามสั่ง</p>
            <p className='text-lg'>อร่อยจนต้องกลับมาซ้ำ</p>
          </div>
        </section>

        <main className='flex-grow container mx-auto px-4 py-12'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>รายการอาหาร</h2>
            <p className='text-gray-600'>เลือกอาหารที่ชอบได้เลย</p>
          </div>

          {/* Game Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {gameIds.map((game) => (
              <div key={game.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                {/* Game Image */}
                <div className='relative overflow-hidden bg-gray-200 h-48'>
                  <img
                    src={game.image}
                    alt={game.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>

                {/* Game Info */}
                <div className='p-4'>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>{game.title}</h3>
                  <p className='text-gray-600 text-sm mb-3'>{game.desc}</p>

                  {/* Rating */}
                  <div className='flex items-center mb-3'>
                    <div className='flex text-yellow-400'>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < Math.floor(game.rating) ? '★' : '☆'}</span>
                      ))}
                    </div>
                    <span className='text-gray-600 text-sm ml-2'>({game.rating})</span>
                  </div>

                  {/* Price and Button */}
                  <div className='flex items-center justify-between'>
                    <span className='text-2xl font-bold text-blue-600'>฿{game.price}</span>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200'>
                      สั่ง
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
