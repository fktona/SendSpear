'use client'
import React from 'react'
import InputField from '@/components/inputField'
import { useState } from 'react'
import Button from '@/components/button'
import Modal from '@/components/modal/modal'
import {  MdDelete } from 'react-icons/md';
import useModal from '@/hooks/useModal'
import AddAuddienceModal from '@/components/modal/addaudience'

export default function Audience() {
 



   const {state, dispatch} = useModal()

   const {open} = state

    const handleModal = () => {
      dispatch({type: 'OPEN'})
      console.log('1' , state) 
    }


  return (
    
    <div>
     
      <div><AddAuddienceModal
      open={open}  
      dispatch={dispatch} />
      </div>
      
      <div className='mx-auto w-fit'>
        <Button
          type='button'
          onClick={handleModal}
        >
          Add Audience
        </Button>
        <Button
          type='button'
          onClick={handleModal}
        >
         create link
        </Button>
      
      </div>
    </div>
  )
}