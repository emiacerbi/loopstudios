import React, { useState } from 'react'

export const FooterList = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'About', underline: false },
    { id: 2, text: 'Careers', underline: false },
    { id: 3, text: 'Events', underline: false },
    { id: 4, text: 'Products', underline: false },
    { id: 5, text: 'Support', underline: false },
  ])

  const changeUnderline = (id: number) => {
    return setItems(prevItems => prevItems.map(item => {
      return item.id === id ? { ...item, underline: !item.underline } : item
    }))
  }

  return (
    <ul className='flex font-primary flex-col text-center py-8 gap-5'>
      {
        items.map(item => {
          return (
            <li
              key={item.id}
              onMouseEnter={() => changeUnderline(item.id)}
              onMouseLeave={() => changeUnderline(item.id)}
              className={`cursor-pointer relative `}
            >
              <div className={`absolute duration-300 ${item.underline ? 'w-1/2' : 'w-0'} -bottom-1 left-1/2 -translate-x-1/2  h-0.5 bg-white `}>
              </div>

              <p className='text-xl'>{item.text}</p>
            </li>
          )
        })
      }
    </ul>
  )
}
