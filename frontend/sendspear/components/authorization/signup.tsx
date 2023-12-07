import React, { useState } from 'react'
import InputField from '../inputField'
import { userProfile } from '@/types'
import Button from '../button'
import {SwitchAuthProps} from '@/types'

export default function signup({handleSwitchAuth}: SwitchAuthProps) {
  const [userProfile , setUserProfile] = useState<userProfile>({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value , name} = e.target
    setUserProfile({...userProfile,
    [name]: value})
  }


  return (
    <div>
      <form>
      <InputField 
      name='email'
      label='Email'
      type='email'
      placeholder='Enter Email'
      onChange={handleChange}
      />
      <InputField
      name='firstname'
      label='First Name'
      type='text'
      placeholder='Enter First Name'
      onChange={handleChange}
      />
      <InputField
      name='lastname'
      label='Last Name'
      type='text'
      placeholder='Enter Last Name'
      onChange={handleChange}
      />
      
      <InputField 
      name='password'
      label='Password'
      type='password'
      placeholder='Enter Password'
      onChange={handleChange}
      />
      <InputField 
      name='confirmPassword'
      label='Confirm Password'
      type='password'
      placeholder='Confirm Password'
      onChange={handleChange}
      />
      </form>
      <Button onClick={handleSwitchAuth} 
      type="submit">Already Have an Account Login</Button>
    </div>
  )
}
