import React from 'react'
import { Image, Link } from '@nextui-org/react'

export default function Home () {
  const products = [
    {
      img: 'Rectangle20.png',
      name: 'Flat Bottom Pouch',
      price: '₹ 0.473 - ₹ 0.930'
    },
    {
      img: 'Rectangle21.png',
      name: 'Stand-up pouch',
      price: '₹ 0.473 - ₹ 0.930'
    },
    {
      img: 'Rectangle22.png',
      name: 'Three Side Seal Pouch',
      price: '₹ 0.473 - ₹ 0.930'
    },
    {
      img: 'Rectangle23.png',
      name: 'Center Seal',
      price: '₹ 0.473 - ₹ 0.930'
    }
  ]

  return (
    <div className='flex flex-col items-center max-w-[1,291px] gap-[60px] mb-4'>
      <h1 className='text-5xl font-bold my-5'>Packaging type</h1>
      <div className='grid grid-cols-4 gap-8'>
        {products.map(ele => {
          return (
            <Link
              href={`${ele.name
                .toLocaleLowerCase()
                .replace(' ', '-')}/packaging-type`}
              key={ele.name}
              className='flex flex-col gap-5'
            >
              <Image src={ele.img} alt='ele' />
              <div className='w-full text-left'>
                <div className='font-medium'>{ele.name}</div>
                <div className='font-semi-bold px-1 bg-gray-200 text-base text-[#143761] w-[140px] h-[22px] rounded-lg gap-0 '>
                  {ele.price}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
