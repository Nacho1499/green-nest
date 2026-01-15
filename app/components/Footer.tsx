import React from 'react'

function Footer() {
    const date=new Date()
    const year=date.getFullYear()
  return (
   
    <section className='bg-green-800 p-6 text-center'>
        <h1 className='text-gray-400 text-sm'>©{year} GreenNest. All Right Reserved.</h1>

    </section>
  )
}

export default Footer