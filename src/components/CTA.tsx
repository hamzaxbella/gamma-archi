import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className=' padding-x lg:px-0 w-full flex gap-4 flex-col items-center border-t-[1px] border-b-[1px] border-gray-400 py-8'>
        <h2 className='text-2xl lg:text-3xl font-thin tracking-wider text-center'>Demander une consultation gratuite.</h2>
        <Button label="Consultation Gratuite" primary path="/quote" />
        </div>
      
    </section>
  )
}

export default CTA