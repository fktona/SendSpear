'use client'

import React, { useState } from 'react'
import Modal from './modal'
import InputField from '../inputField'
import Button from '../button'
import { MdDelete } from 'react-icons/md';
import { ModalState } from '@/types'


export default function CreateLinkModal({ open , dispatch}: ModalState) {
    const [content , setContent] = useState({title:'', description: ''})

    
  
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
      const {value ,name} = e.target
      setContent({...content,
         [name]:value})
    }
   
   

    
    
    return(
      <div  className='p-24'>
  
    <InputField 
    name='title'
    label='Title'
    type='text'
    placeholder='Enter Title'
    value={content.title}
    onChange={handleChange}
    />
      <InputField 
       
        name='description'
        label='Decription'
        type='description'
        placeholder='Enter description'
        value={content.description}
        id='description'
        onChange={handleChange}
      />
      

    <Button>Create Link</Button>
  </div>

  )
  
}

