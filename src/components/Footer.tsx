import { useState } from 'react'
import { FooterIcon } from './FooterIcon'
import { FooterList } from './FooterList'

export const Footer = () => {

  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-5 py-20 flex flex-col items-center gap-5 justify-center'>
        <img src="logo.svg" alt="" />
        <FooterList />

        <div className='flex gap-5 items-center mx-auto mt-5'>
          <FooterIcon icon='/public/icon-facebook.svg' alt='facebook logo' />
          <FooterIcon icon='icon-twitter.svg' alt='twitter logo' />
          <FooterIcon icon='icon-pinterest.svg' alt='pinterest logo' />
          <FooterIcon icon='icon-instagram.svg' alt='instagram logo' />
        </div>

        <p className='text-center font-primary text-lg text-neutral-500'>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
