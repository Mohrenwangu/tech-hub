import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const home = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4' >
      <div className=''>
        <h1 className='text-6xl md:text-[80px] font-bold tracking-wide headline_text'> 
        Creative <br />
        Thoughts <br />
        Agency</h1>
        <p className='text-xl text-gray-500 py-4' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui aliquam vitae, veritatis aspernatur expedita quas nesciunt eius odio quibusdam ex, itaque adipisci.</p>
       {/* margin bottom-push down a distance. it separates the div*/}
        <div className='mb-4 '>
        <Link href={"/"}>
        <button className='bg-blue-600 ml-4 p-2 w-[120px] rounded-md '> Learn More</button>
        </Link>
    
        <Link href={"/contact"}>
        <button className='bg-white text-black ml-4 p-2 w-[120px] rounded-md ' > Contact </button>
        </Link>       
         </div>
         <div className=' '> 
         <Image src='/images/brands.jpg' alt='brand' height={50} width={500} bg-black-600 />
          </div>
      </div>
      <div className='w-full md:w-[50px'> 
      <Image src='/images/hero.gif'alt='hero-section'
      width={500}
      height={500} />
      </div>

    </div>
  )
}

export default home