import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Input from '../../components/Inputs';
import Button from '../../components/Button';
import ProfilePhotoSelector from '../../components/ProfilePhotoSelector';
import { authService } from '../../services/authService';
import toast from 'react-hot-toast';
import { signupSchema, type SignupFormData } from '../../validations/auth';
import uploadImage from '../../utils/uploadImage';

interface SignupProps {
  setCurrentPage: (page: string) => void;
}

const Signup = ({ setCurrentPage }: SignupProps) => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const signupMutation = useMutation({
    mutationFn: async (data: SignupFormData) => {
      let uploadedImageUrl = '';
      if (profilePicture) {
        const response = await uploadImage(profilePicture);
        uploadedImageUrl = response.imageUrl;
      }
      return authService.register({
        ...data,
        profileImageUrl: uploadedImageUrl,
      });
    },
    onSuccess: (data) => {
      const { token } = data;
      localStorage.setItem("accessToken", token);
      navigate("/dashboard");
    },
    onError: (error: any) => {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate(data);
  };

  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Join us today to create your resume and start applying to jobs.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfilePhotoSelector
          image={previewUrl}
          setImage={setProfilePicture}
          preview={previewUrl}
          setPreview={setPreviewUrl}
        />
        <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
          <Input
            {...register("name")}
            type='text'
            label='Full Name'
            placeholder='Enter your full name'
          />
          {errors.name && (
            <p className='text-red-500 text-xs pb-2.5'>{errors.name.message}</p>
          )}

          <Input
            {...register("email")}
            type='email'
            label='Email'
            placeholder='Enter your email'
          />
          {errors.email && (
            <p className='text-red-500 text-xs pb-2.5'>{errors.email.message}</p>
          )}

          <Input
            {...register("password")}
            type='password'
            label='Password'
            placeholder='Enter your password'
          />
          {errors.password && (
            <p className='text-red-500 text-xs pb-2.5'>{errors.password.message}</p>
          )}

          <Input
            {...register("confirmPassword")}
            type='password'
            label='Confirm Password'
            placeholder='Confirm your password'
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-xs pb-2.5'>{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button 
          type='submit'
          isLoading={signupMutation.isPending}
        >
          Sign Up
        </Button>

        <p className='text-[13px] text-slate-700 mt-3'>
          Already have an account?{' '}
          <span
            className='font-medium text-primary underline cursor-pointer'
            onClick={() => setCurrentPage('login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  )
}

export default Signup
