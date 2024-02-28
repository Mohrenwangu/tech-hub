import React from 'react'

const RegisterForm = () => {
  return (
    <div>
 <div className=''>
        <form action='' className='flex flex-col md:w-1/3 md:m-auto bg-[#383850] p-4 '>
        <input type='text' placeholder='Username' className='my-2 p-2 rounded-md text-gray-400 bg-[#2d2b42] outline-none' />
        <input type='text' placeholder='email' className='my-2 p-2 rounded-md text-gray-400 bg-[#2d2b42] outline-none' />
            <input type='password' placeholder='Password' className='my-2 p-2 rounded-md text-gray-400 bg-[#2d2b42] outline-none' />
            <input type='password' placeholder='confirm password' className='my-2 p-2 rounded-md text-gray-400 bg-[#2d2b42] outline-none' />
            <button className='p-2 bg-blue-600 my-2 rounded-md'>Register</button>
        </form>
    </div>    </div>
  )
}

export default RegisterForm