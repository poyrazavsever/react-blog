import React from 'react'

//Sections
import Banner from './Banner'
import Projects from './Projects'
import Skills from './Skills'

function Home() {
  return (
    <div className='mt-24 animate-card'>
      
      <div className='md:container mx-auto'>
        <Banner />


        <div className='mt-24 md:mt-48 mobile:pl-10 pb-16 flex flex-col gap-48'>

          <Skills />

          <Projects />

        </div>

      </div>

    </div>
  )
}

export default Home