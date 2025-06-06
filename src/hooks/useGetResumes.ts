import { useQuery } from '@tanstack/react-query';
import { resumeService } from '../services/resumeService';

export const useGetResumes = () => {
  return useQuery({
    queryKey: ['resumes'],
    queryFn: resumeService.getAllResumes,
  });
}; 