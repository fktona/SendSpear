
import React, { useState } from 'react';
import InputField from '../inputField';
import Button from '../button';
import { SwitchAuthProps } from '@/types';
import { LoginProps } from '@/types';

const Login: React.FC <SwitchAuthProps> = ({handleSwitchAuth}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
    
          <InputField label='Email'  type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          
          <InputField label='Password' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <Button type="submit">Forget Password</Button>
      <Button onClick={handleSwitchAuth}
      type="submit">Don"t Have an Account SignUp</Button>
    </div>
  );
};

export default Login;
