import React from 'react'
import { Card } from './Card'

export const MobileCreations = () => {
  return (
    <div className='flex flex-col gap-5 py-10 lg:hidden'>
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
    </div>
  )
}
