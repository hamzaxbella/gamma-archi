import React, { useState } from 'react'
import { accordion } from '../../public/icons'
import Image from 'next/image'
interface AccordionProps {
    title : string,
    answer : string,
}


const Accordion = ({title , answer} : AccordionProps) => {

    const [accordionOpen , setAccordionOpen] = useState(false)

    
  return (
    <div className='mb-12 accordion' data-accordion>
        <button className='flex gap-6 justify-center items-center' onClick={() => setAccordionOpen(!accordionOpen)} >
            <Image className={`${accordionOpen ? "rotate-45" : ""} transition-all duration-300`} width={45} height={45} src={accordion} alt='accordion'/>
            <span className='text-xl lg:text-2xl text-start tracking-wider font-thin'>{title}</span>

        </button>
        <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ml-16 ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
           >
            <div className={`  ${accordionOpen ? "block" : "hidden"}  font-thin overflow-hidden leading-8 my-6 text-gray-300  text-xl `} >
                {answer}
            </div>
        </div>
    </div>
  )
}

export default Accordion