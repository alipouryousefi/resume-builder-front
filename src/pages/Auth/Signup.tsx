import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs';
import ProfilePhotoSelector from '../../components/ProfilePhotoSelector';
interface SignupProps {
  setCurrentPage: (page: string) => void;
}

const Signup = ({ setCurrentPage }: SignupProps) => {

  const [profilePicture, setProfilePicture] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let profilePicture = ''

    if(!fullName){
      setError('Full name is required')
      return
    }

    if(!email){
      setError('Email is required')
      return
    }

    if(!validateEmail(email)){
      setError('Invalid email address')
      return
    }

    if(!password){
      setError('Password is required')
      return
    }

    if(password.length < 8){
      setError('Password must be at least 8 characters long')
      return
    }

    try{

    }catch(error){

    }
  }


  return (
    <div className='w-[9vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Join us today to create your resume and start applying to jobs.
      </p>
      <form onSubmit={handleSubmit}>

        <ProfilePhotoSelector
          image={profilePicture}
          setImage={(file) => file ? setProfilePicture(URL.createObjectURL(file)) : setProfilePicture('')}
          preview={profilePicture}
          setPreview={setProfilePicture}
        />
        <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
          <Input
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            type='text'
            label='Full Name'
            placeholder='Enter your full name'
          />

          <Input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            type='email'
            label='Email'
            placeholder='Enter your email'
          />

          <Input
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            type='password'
            label='Password'
            placeholder='Enter your password'
          />

        </div>
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button type='submit' className='btn-primary'>
          Sign Up
          </button>
        <p className='text-[13px] text-slate-700 mt-3'>
          Already have an account? <button className='font-medium text-primary underline cursor-pointer' onClick={() => setCurrentPage('login')}>Login</button>
        </p>
      </form>
    </div>
  )
}

export default Signup
