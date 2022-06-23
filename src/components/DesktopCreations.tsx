import React from 'react'
import { Card } from './Card'

export const DesktopCreations = () => {
  return (
    <div className='hidden grid-cols-[256px_256px] gap-7 justify-center py-10 lg:grid xl:grid-cols-[256px_256px_256px_256px]'>
      <Card
        bgImage='desktop/image-deep-earth.jpg'
        imageTitle='deep earth'
      />
      <Card
        bgImage='desktop/image-night-arcade.jpg'
        imageTitle='night arcade'
      />
      <Card
        bgImage='desktop/image-soccer-team.jpg'
        imageTitle='soccer team vr'
      />
      <Card
        bgImage='desktop/image-grid.jpg'
        imageTitle='the grid'
      />

      <Card
        bgImage='desktop/image-from-above.jpg'
        imageTitle='from up above vr'
      />
      <Card
        bgImage='desktop/image-pocket-borealis.jpg'
        imageTitle='pocket borealis'
      />
      <Card
        bgImage='desktop/image-curiosity.jpg'
        imageTitle='the curiosity'
      />
      <Card
        bgImage='desktop/image-fisheye.jpg'
        imageTitle='make it fisheye'
      />
    </div>
  )
}
