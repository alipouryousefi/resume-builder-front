import { useQuery } from '@tanstack/react-query';
import { resumeService } from '../services/resumeService';

export const useResumes = () => {
  return useQuery({
    queryKey: ['resumes'],
    queryFn: resumeService.getAllResumes,
  });
}; 