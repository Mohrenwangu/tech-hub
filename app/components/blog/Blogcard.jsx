import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blogcard = ({ x })=>{
  return (
    <div>
      <div className='border border-white border-2 p-4 rounded-md '>
      <Image src={'/images/post.png'} alt='post' width={300} height={300}   />
        <h1 className='mt-2 font-bold '>{x.title} </h1>
        <p className='text-gey-500 my-2 text-lg '>{x.body.slice(0, 21)}... </p>
        <Link className='bg-blue-600 rounded-sm w-full p-2 my-2 ' href={`/blog/${x.id}}` }>Read more</Link>
      </div>
    </div>
  );
};

export default Blogcard;