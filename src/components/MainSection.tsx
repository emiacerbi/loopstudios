import React from 'react'
import { SecondaryTitle } from './SecondaryTitle'

export const MainSection = () => {
  return (
    <main className='font-primary'>
      <div className='container px-5 pt-32 mx-auto max-w-6xl'>
        <div className='flex flex-col gap-5 justify-center items-center lg:flex-row lg:items-end'>

          <picture>
            <source media='(max-width: 400px)' srcSet='mobile/image-interactive.jpg' />
            <source media='(min-width: 401px)' srcSet='desktop/image-interactive.jpg' />
            <img src='desktop/image-interactive.jpg' className='mx-auto' alt="person with vr" />
          </picture>

          <div className='flex flex-col gap-3 max-w-xl bg-white lg:pt-16 lg:pl-24 lg:-ml-40'>
            <SecondaryTitle>
              THE LEADER IN INTERACTIVE VR
            </SecondaryTitle>
            <p className='mx-auto max-w-xs  text-center text-gray-500 sm:max-w-md lg:mx-0 lg:max-w-md lg:text-left'>
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>

        </div>
      </div>

    </main>
  )
}
