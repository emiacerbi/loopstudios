import React, { useState } from 'react'

interface Props {
  bgImage: string
  imageTitle: string
}

export const Card = ({ bgImage, imageTitle }: Props) => {
  const [hover, setHover] = useState(false)

  return (
    <article
      className={`relative mx-auto max-w-[600px] ${hover ? 'text-black' : 'text-white'} duration-300 cursor-pointer`}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <div className={`absolute w-full h-full ${hover ? 'bg-white opacity-60' : 'bg-black opacity-30'} duration-300`}></div>

      <img src={`${bgImage}`} alt="img" />
      <h1 className='absolute bottom-5 left-5 max-w-[8ch] font-secondary text-3xl uppercase'>
        {imageTitle}
      </h1>
    </article>
  )
}
