import React from 'react'
import { SecondaryTitle } from './SecondaryTitle'

export const MainSection = () => {
  return (
    <main className='font-primary'>
      <div className='container px-5 py-10'>
        <div className='flex flex-col gap-5'>
          <img src="mobile/image-interactive.jpg" alt="person with vr" />
          <SecondaryTitle>
            THE LEADER IN INTERACTIVE VR
          </SecondaryTitle>
          <p className='text-gray-500 text-center max-w-xs mx-auto'>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>

    </main>
  )
}
