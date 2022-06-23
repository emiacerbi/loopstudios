import React from 'react'

interface Props {
  children: string
}

export const SecondaryTitle = ({ children }: Props) => {
  return (
    <h2 className='mx-auto mt-8 max-w-lg font-secondary text-4xl text-center md:text-5xl lg:-order-1 lg:mx-0 lg:text-left'>{children}</h2>
  )
}
