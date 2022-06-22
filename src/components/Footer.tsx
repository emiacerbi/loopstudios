import React, { } from 'react'
import { FooterIcon } from './FooterIcon'
import { FooterList } from './FooterList'

export const Footer = () => {
  return (
    <footer className='text-white bg-black'>
      <div className='container flex flex-col gap-5 justify-center items-center py-20 px-5 mx-auto max-w-6xl lg:flex-row lg:justify-between'>

        <div className='flex flex-col gap-5 lg:items-start'>
          <img src="logo.svg" alt="" />
          <FooterList />
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex gap-5 items-center mx-auto mt-5 lg:mt-0'>
            <FooterIcon icon='/public/icon-facebook.svg' alt='facebook logo' />
            <FooterIcon icon='icon-twitter.svg' alt='twitter logo' />
            <FooterIcon icon='icon-pinterest.svg' alt='pinterest logo' />
            <FooterIcon icon='icon-instagram.svg' alt='instagram logo' />
          </div>

          <p className='font-primary text-lg text-center text-neutral-500'>
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
