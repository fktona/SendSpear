import React from 'react'
import Modal from './modal'
import useModal  from '@/hooks/useModal'

export default function createCampaign() {
    const {open , handleModal} = useModal()
  return (

    <Modal open={open} handleClose={handleModal} size={'sm'}>

        

    </Modal>
    
  )
}
