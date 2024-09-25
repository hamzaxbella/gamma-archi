"use client"
import About from '@/components/About'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Map from '@/components/Map'
import PageTitle from '@/components/PageTitle'
import Services from '@/components/Services'
import React from 'react'

const page = () => {

    
    
  return (
    <main className="relative z-20 w-full h-full">

        <section>
            <PageTitle title={"Á PROPOS."} />
        </section>

        <section>
            <About/>
        </section>

        <section>
            <CTA/>
        </section>

        <section>
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