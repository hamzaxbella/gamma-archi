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
    <main className="bg-background max-container relative bg-transparent z-10 padding-x lg:px-0">

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