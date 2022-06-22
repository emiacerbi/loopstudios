import React from 'react'
import { DesktopCreations } from './DesktopCreations'
import { MobileCreations } from './MobileCreations'
import { SecondaryTitle } from './SecondaryTitle'

export const Creations = () => {
  return (
    <section>
      <div className='container flex flex-col gap-7 py-32 px-5 mx-auto max-w-6xl lg:grid'>

        <div className='flex justify-between'>
          <SecondaryTitle>
            OUR CREATIONS
          </SecondaryTitle>
          <button className='hidden py-3 px-12 mx-auto mt-5 max-w-fit font-primary text-2xl tracking-widest hover:text-white hover:bg-black border-2 border-black duration-200 lg:block'>
            SEE ALL
          </button>
        </div>

        <MobileCreations />
        <DesktopCreations />

        <button className='py-3 px-12 mx-auto mt-5 max-w-fit font-primary text-2xl tracking-widest hover:text-white hover:bg-black border-2 border-black duration-200 lg:hidden'>
          SEE ALL
        </button>
      </div>
    </section>
  )
}
