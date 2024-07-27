import React from 'react'

export default function Hero() {
  return (
    <section> 
    <div className='my-10 uppercase flex justify-center p-10 text-3xl bg-gray-800 '>find your next job</div>

<form className='flex gap-10 justify-center'>
    <input type='text' className='p-4' />
    <button className='bg-blue-800 p-4'> search</button>
</form>

  </section>
  )
}
