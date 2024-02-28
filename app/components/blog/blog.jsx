import Image from 'next/image'
import React from 'react'
import Blogcard from './Blogcard'
// import { posts } from '@/app/lib/localData'
// const url='https://jsonplaceholder.typicode.com/posts';
const url = process.env.NEXT_PUBLIC_POST_URL
const getPosts= async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok){
    throw new Error('Failed to fetch the data from an API given above');
  }else{
    return res.json();
  }
};
const blog = async () => {
  //console.log(await getPosts())
  const posts =await getPosts();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-4' >
    {
      posts.map((x, index)=>(
          <Blogcard x={x} key={index} />
      )
      )
    }
    </div>
  )
}

export default blog
{/* <div className=''>
            <Image src='' alt='post' width={500} height={500} />
        
          </div> */}