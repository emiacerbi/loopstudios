import React from 'react'

interface Props {
  children: string
}

export const SecondaryTitle = ({ children }: Props) => {
  return (
    <h2 className='text-4xl mt-8 text-center font-secondary'>{children}</h2>
  )
}
