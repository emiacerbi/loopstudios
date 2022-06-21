import React from 'react'
import { Card } from './Card'
import { SecondaryTitle } from './SecondaryTitle'

export const Creations = () => {
  return (
    <section>
      <div className='container px-5 py-10 flex flex-col gap-7'>
        <SecondaryTitle>
          OUR CREATIONS
        </SecondaryTitle>

        {/* More padding */}
        <div></div>

        <Card
          bgImage='mobile/image-deep-earth.jpg'
          imageTitle='deep earth'
        />
        <Card
          bgImage='mobile/image-night-arcade.jpg'
          imageTitle='night arcade'
        />
        <Card
          bgImage='mobile/image-soccer-team.jpg'
          imageTitle='soccer team vr'
        />
        <Card
          bgImage='mobile/image-grid.jpg'
          imageTitle='the grid'
        />
        <Card
          bgImage='mobile/image-from-above.jpg'
          imageTitle='from up above vr'
        />
        <Card
          bgImage='mobile/image-pocket-borealis.jpg'
          imageTitle='pocket borealis'
        />
        <Card
          bgImage='mobile/image-curiosity.jpg'
          imageTitle='the curiosity'
        />
        <Card
          bgImage='mobile/image-fisheye.jpg'
          imageTitle='make it fisheye'
        />

        <button className='text-2xl hover:bg-black duration-200 hover:text-white font-primary mt-5 tracking-widest border-2 border-black max-w-fit mx-auto px-12 py-3'>
          SEE ALL
        </button>
      </div>

    </section>
  )
}
