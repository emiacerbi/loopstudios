import React from 'react'

interface Props {
  bgImage: string
  imageTitle: string
}

export const Card = ({ bgImage, imageTitle }: Props) => {
  return (
    <article className='relative mx-auto max-w-[600px] duration-500 hover:-translate-y-1 cursor-pointer'>
      <div className='absolute w-full h-full bg-black opacity-30'></div>
      <img src={`${bgImage}`} alt="" className='' />
      <h1 className='absolute bottom-5 left-5 max-w-[8ch] font-secondary text-3xl text-white uppercase'>
        {imageTitle}
      </h1>
    </article>
  )
}
