'use client'

import React, { useState } from 'react'
import Modal from './modal'
import InputField from '../inputField'
import Button from '../button'
import {  MdDelete } from 'react-icons/md';
import CreateLinkModal from './createAudienceLink'
import { ModalState } from '@/types'


export default function AddAuddienceModal({ open , dispatch}: ModalState ) {
    const [emailLists , setEmailLists] = useState([{email: ''}])
    const [title , setTitle] = useState('')
    const [changeModal , setChangeModal] = useState<boolean>(false)
    
  
    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const newEmailLists = [...emailLists]
      newEmailLists[index].email = e.target.value
      setEmailLists(newEmailLists)
    }
    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }
    const handleAddEmail = () => {
      setEmailLists([...emailLists, {email: ''}])
    }
  
    const handleDeleteEmail = (index: number) => {
      const newEmailLists = [...emailLists]
      newEmailLists.splice(index, 1)
      setEmailLists(newEmailLists)
    }

    const handleModal = () => {
      dispatch({type: 'CLOSE'})
    }

     const handleOption = () => {
      setChangeModal(o=> !o)
     }
    
    
    return(
      <Modal open={open} handleClose={ handleModal} size={'lg'}>

        <div className='w-full flex justify-around text-lg font-semibold  '><button
        onClick={() => setChangeModal(false)}>Add By Email</button>
        <button
        onClick={() => setChangeModal(true)}>Add by  Link</button></div>
        
        {!changeModal ?
        <div >
    <InputField 
    name='title'
    label='Title'
    type='text'
    placeholder='Enter Title'
    value={title}
    onChange={handleTitleChange}
    />
    {emailLists.map((emailField, index) => (
      <div  key={index}>
      <MdDelete size={20} className='float-right text-blue-700' 
      onClick = {handleDeleteEmail} />
      <InputField 
       
        name={`email${index}`}
        label='Email'
        type='email'
        placeholder='Enter Email'
        value={emailField.email}
        id={`email${index}`}
        onChange={(e) => handleChange(index, e)}
      />
      </div>
    ))}
   
    
    <Button onClick={handleAddEmail}>Add Email</Button>
    <Button>Send Email</Button>
    </div>: <CreateLinkModal />}
    
    
  </Modal>

  )
  
}

