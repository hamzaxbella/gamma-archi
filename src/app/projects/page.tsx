import Map from '@/components/Map'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <main className='max-container'>
      <h1>toute nos réalisations</h1>
      <section>
        <Projects/>
      </section>

      <section>
        <Map/>
      </section>

    </main>
  )
}

export default page