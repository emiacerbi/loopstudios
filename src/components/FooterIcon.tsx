import React from 'react'

interface Props {
  icon: string
  alt: string
}

export const FooterIcon = ({ icon, alt }: Props) => {
  return (
    <img
      src={icon}
      width={35}
      height={35}
      alt={alt}
      className='pb-[5px] text-white hover:opacity-50 duration-200 cursor-pointer'
    />
  )
}
