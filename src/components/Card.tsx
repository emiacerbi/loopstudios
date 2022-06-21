import React from 'react'

interface Props {
  bgImage: string
  imageTitle: string
}

export const Card = ({ bgImage, imageTitle }: Props) => {
  return (
    <article className='relative cursor-pointer hover:-translate-y-1 duration-500'>
      <div className='w-full h-full absolute bg-black opacity-30'></div>
      <img src={`${bgImage}`} alt="" />
      <h1 className='absolute max-w-[8ch] text-white font-secondary bottom-5 left-5 uppercase text-3xl'>
        {imageTitle}
      </h1>
    </article>
  )
}
