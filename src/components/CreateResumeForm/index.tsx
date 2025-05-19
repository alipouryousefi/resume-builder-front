import React from "react";
import Input from "../Inputs";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resumeService } from "../../services/resumeService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; 
const createResumeSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

type CreateResumeFormData = z.infer<typeof createResumeSchema>;

const CreateResumeForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateResumeFormData>({
    resolver: zodResolver(createResumeSchema),
  });

  const createResumeMutation = useMutation({
    mutationFn: resumeService.createResume,
    onSuccess: (data) => {
      navigate(`/resume/${data._id}`);
      
    },
    onError: (error: any) => {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    },
  });


  const onSubmit = (data: CreateResumeFormData) => {
    createResumeMutation.mutate(data.title);
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create New Resume</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-3">
        Give a title to your resume and click on create button to create your
        resume
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title")}
          type="text"
          label="Title"
          placeholder="Enter resume title"
        />
        {errors.title && (
          <p className="text-red-500 text-xs pb-2.5">{errors.title.message}</p>
        )}

        <Button type="submit" isLoading={createResumeMutation.isPending}>CREATE RESUME</Button>
      </form>
    </div>
  );
};

export default CreateResumeForm;
