'use client'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Map from '@/components/Map'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import React from 'react'


const page = () => {

  
  return (
    <main className=" relative mt-10 padding-x w-full h-full ">
      <section>
        <Hero />
      </section>

      <section className='h-[1000px]'>
        <Introduction />
      </section>

      <section>
        <Projects/>
      </section>

      <section>
        <Services />
      </section>

      <section>
        <FAQ/>
      </section>

      <section>
        <Map/>
      </section>
    </main>
  )
}

export default page