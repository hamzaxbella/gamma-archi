import React from 'react'

interface PageTitleProps {
    title : string
}


const PageTitle = ({title} : PageTitleProps) => {
  return (
    <div className='flex items-center gap-6  lg:mt-24'>
        <h1 className='text-4xl lg:text-6xl font-semibold tracking-widest whitespace-nowrap uppercase'>{title}</h1>
        <div className='w-full h-px bg-white'/>
    </div>
  )
}

export default PageTitle