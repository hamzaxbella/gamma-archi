"use client"
import About from '@/components/About'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Map from '@/components/Map'
import Services from '@/components/Services'
import React from 'react'

const page = () => {

    
    
  return (
    <main className="bg-background">
        <section>
            <About/>
        </section>

        <section className='h-[1000px]'>
            <CTA />
        </section>

        <section className='h-[1000px]'>
            <Services/>
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